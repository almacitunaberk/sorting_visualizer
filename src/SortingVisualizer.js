import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import {
  mergeSort,
  quickSort,
  heapSort,
  bubbleSort,
  getMergeSortAnimations,
} from './sortingAlgorithms/sortingAlgorithms';
import Header from './Header';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const _arraySize = window.localStorage.getItem('arraySize') ? window.localStorage.getItem('arraySize') : 300;
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(_arraySize);
  const [largestValue, setLargestValue] = useState(10);

  const resetArray = () => {
    const newArray = [];
    let tempLargestVal = 0;
    for (let i = 0; i < arraySize; i++) {
      const randomNumber = generateRandomNubmer(10, 1000);
      newArray.push(randomNumber);
      if (randomNumber > tempLargestVal) {
        tempLargestVal = randomNumber;
      }
    }
    const bars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = 'pink';
    }
    setArray(newArray);
    setLargestValue(tempLargestVal);
  };

  const generateNewArray = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const generateRandomNubmer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleMergeSort = () => {
    const animations = mergeSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'green';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${(newHeight / largestValue) * 100}%`;
        }, i * 10);
      }
    }
  };

  const handleBubbleSort = () => {
    const animations = bubbleSort(array);
  };

  return (
    <div className="container">
      <Header
        handleArrayGenerate={generateNewArray}
        handleBarNumberChange={(value) => {
          window.localStorage.setItem('arraySize', value);
          setArraySize(value);
        }}
        handleMergeSort={handleMergeSort}
        handleBubbleSort={handleBubbleSort}
      />
      <div className="bar__container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${(value / largestValue) * 100}%` }}></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;

import React, { useLayoutEffect } from 'react';
import { useState, useEffect } from 'react';
import { mergeSort, quickSort, heapSort, bubbleSort } from './sortingAlgorithms/sortingAlgorithms';
import Header from './Header';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(300);
  const [largestValue, setLargestValue] = useState(10);

  const resetArray = () => {
    const newArray = [];
    let tempLargestVal = 0;
    for (let i = 0; i < arraySize; i++) {
      const randomNumber = generateRandomNubmer(10, 299);
      newArray.push(randomNumber);
      if (randomNumber > tempLargestVal) {
        tempLargestVal = randomNumber;
      }
    }
    setArray(newArray);
    setLargestValue(tempLargestVal);
    console.log(newArray.length);
  };

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const generateRandomNubmer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleMergeSort = () => {
    const animations = mergeSort(array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        console.log(barOneIdx);
        console.log(barTwoIdx);
        const barOneStyle = bars[barOneIdx].style;
        const barTwoStyle = bars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'purple';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = bars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
  };

  const handleBubbleSort = () => {
    const newArray = bubbleSort(array);
    setArray(newArray);
  };

  return (
    <div className="container">
      <Header
        handleArrayGenerate={() => resetArray()}
        handleBarNumberChange={(value) => {
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

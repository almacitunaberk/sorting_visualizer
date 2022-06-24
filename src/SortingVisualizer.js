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
      const randomNumber = generateRandomNubmer(10, 1000);
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
    const sortedArray = mergeSort(array);
    setArray(sortedArray);
  };

  return (
    <div className="container">
      <Header
        handleArrayGenerate={() => resetArray()}
        handleBarNumberChange={(value) => {
          setArraySize(value);
        }}
        handleMergeSort={() => handleMergeSort()}
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

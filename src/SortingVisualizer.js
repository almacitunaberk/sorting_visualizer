import React from 'react';
import { useState, useEffect } from 'react';
import { mergeSort, quickSort, heapSort, bubbleSort, selectionSort } from './sortingAlgorithms/sortingAlgorithms';
import Header from './Header';
import './SortingVisualizer.css';

var Timer = function (callback, delay) {
  var timerId,
    start,
    remaining = delay;

  this.pause = function () {
    window.clearTimeout(timerId);
    timerId = null;
    remaining -= Date.now() - start;
  };

  this.resume = function () {
    if (timerId) {
      return;
    }

    start = Date.now();
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
};

const SortingVisualizer = () => {
  const _arraySize = window.localStorage.getItem('arraySize') ? window.localStorage.getItem('arraySize') : 300;
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(_arraySize);
  const [largestValue, setLargestValue] = useState(10);
  let wait = false;

  let firstTimers = [];
  let secondTimers = [];

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
        const firstTimer = new Timer(function () {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 100);
        firstTimers.push(firstTimer);
      } else {
        const secondTimer = new Timer(function () {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${(newHeight / largestValue) * 100}%`;
        }, i * 100);
        secondTimers.push(secondTimer);
      }
    }
  };

  const handleBubbleSort = () => {
    const animations = bubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isComparison = i % 3 === 0;
      if (isComparison) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const firstTimer = new Timer(function () {
          barOneStyle.backgroundColor = 'red';
          barTwoStyle.backgroundColor = 'red';
        }, i * 100);
        firstTimers.push(firstTimer);
      } else {
        const secondTimer = new Timer(function () {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${(newHeight / largestValue) * 100}%`;
          barStyle.backgroundColor = 'green';
        }, i * 100);
        secondTimers.push(secondTimer);
      }
    }
  };

  const handleSelectionSort = () => {
    const animations = selectionSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isComparison = i % 3 === 0;
      if (isComparison) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const firstTimer = new Timer(function () {
          barOneStyle.backgroundColor = 'red';
          barTwoStyle.backgroundColor = 'red';
        }, i * 100);
        firstTimers.push(firstTimer);
      } else {
        const secondTimer = new Timer(function () {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${(newHeight / largestValue) * 100}%`;
          barStyle.backgroundColor = 'green';
        }, i * 100);
        secondTimers.push(secondTimer);
      }
    }
  };

  const handleStop = () => {
    wait = true;
    firstTimers.forEach((timer) => {
      timer.pause();
    });
    secondTimers.forEach((timer) => {
      timer.pause();
    });
    wait = false;
  };

  const handleResume = () => {
    if (wait) {
      return;
    }
    firstTimers.forEach((timer) => {
      timer.resume();
    });
    secondTimers.forEach((timer) => {
      timer.resume();
    });
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
        handleStop={handleStop}
        handleResume={handleResume}
        handleSelectionSort={handleSelectionSort}
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

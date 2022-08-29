import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  mergeSort,
  quickSort,
  heapSort,
  bubbleSort,
  selectionSort,
  insertionSort,
} from '../../sortingAlgorithms/sortingAlgorithms';
import Header from '../Header/Header';
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
  const selectedAlgo = useSelector((state) => state.selectedAlgo);
  const _arraySize = window.localStorage.getItem('arraySize') ? window.localStorage.getItem('arraySize') : 300;
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(_arraySize);
  const [largestValue, setLargestValue] = useState(10);
  let sortingStarted = useRef(false);
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
      bars[i].className = 'array-bar';
    }
    setArray(newArray);
    setLargestValue(tempLargestVal);
  };

  const generateNewArray = () => {
    //window.location.reload(false);
    if (sortingStarted) {
      sortingStarted = false;
      window.location.reload();
    } else {
      resetArray();
    }
  };

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const generateRandomNubmer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleStart = () => {
    sortingStarted = true;
    switch (selectedAlgo.algo) {
      case 'merge': {
        handleMergeSort();
        break;
      }
      case 'bubble': {
        handleBubbleSort();
        break;
      }
      case 'insertion': {
        handleInsertionSort();
        break;
      }
      case 'selection': {
        handleSelectionSort();
        break;
      }
      case 'quick': {
        handleQuickSort();
        break;
      }
      case 'heap': {
        handleHeapSort();
        break;
      }
    }
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

  const handleInsertionSort = () => {
    const animations = insertionSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [type, _, __] = animations[i];
      switch (type) {
        case 'comparison':
          const [___, barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const firstTimer = new Timer(function () {
            barOneStyle.backgroundColor = 'red';
            barTwoStyle.backgroundColor = 'red';
          }, i * 100);
          firstTimers.push(firstTimer);
          break;
        case 'swap':
          const _firstTimer = new Timer(function () {
            const [__, barIdx, newHeight] = animations[i];
            const barStyle = arrayBars[barIdx].style;
            barStyle.height = `${(newHeight / largestValue) * 100}%`;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.push(_firstTimer);
          break;
        case 'final':
          const secondTimer = new Timer(function () {
            const [__, barIdx, newHeight] = animations[i];
            const barStyle = arrayBars[barIdx].style;
            barStyle.height = `${(newHeight / largestValue) * 100}%`;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          secondTimers.push(secondTimer);
          break;
        case 'color_change':
          const __firstTimer = new Timer(function () {
            const [__, barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.backgroundColor = 'green';
            barTwoStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.push(__firstTimer);
          break;
      }
    }
  };

  const handleQuickSort = () => {
    const animations = quickSort(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [type, _, __] = animations[i];
      let timer;
      switch (type) {
        case 'comparisonWithPivotStart':
          timer = new Timer(function () {
            const [_, index, __] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.backgroundColor = 'red';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'comparisonWithPivotEnd':
          timer = new Timer(function () {
            const [_, index, __] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'changeValue':
          timer = new Timer(function () {
            const [_, index, value, isPivot] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.height = `${(value / largestValue) * 100}%`;
            if (!isPivot) {
              barStyle.backgroundColor = 'green';
            } else {
              barStyle.backgroundColor = 'purple';
            }
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'changeColor':
          timer = new Timer(function () {
            const [_, index] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'pivotStart':
          timer = new Timer(function () {
            const [_, pivotIndex, __] = animations[i];
            arrayBars[pivotIndex].style.backgroundColor = 'purple';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'pivotEnd':
          timer = new Timer(function () {
            const [_, pivotIndex] = animations[i];
            arrayBars[pivotIndex].style.backgroundColor = 'green';
          }, i * 100);
          firstTimers.push(timer);
          break;
      }
    }
  };

  const handleHeapSort = () => {
    const animations = heapSort(array);
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const [type, _, __] = animations[i];
      let timer;
      switch (type) {
        case 'comparisonWithLargestStart':
          timer = new Timer(() => {
            const [_, index, largest] = animations[i];
            const barStyle = arrayBars[index].style;
            const largestBarStyle = arrayBars[largest].style;
            barStyle.backgroundColor = 'red';
            largestBarStyle.backgroundColor = 'purple';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'comparisonWithLargestEnd':
          timer = new Timer(() => {
            const [_, index, largest] = animations[i];
            const barStyle = arrayBars[index].style;
            const largestBarStyle = arrayBars[largest].style;
            barStyle.backgroundColor = 'orange';
            largestBarStyle.backgroundColor = 'purple';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'largestChanged':
          timer = new Timer(() => {
            const [_, index, prevLargest] = animations[i];
            const barStyle = arrayBars[index].style;
            const prevBarStyle = arrayBars[index].style;
            barStyle.backgroundColor = 'purple';
            prevBarStyle.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'rootChangingStart':
          timer = new Timer(() => {
            const [_, largest, root] = animations[i];
            const barStyle = arrayBars[largest].style;
            const rootStyle = arrayBars[root].style;
            barStyle.backgroundColor = 'purple';
            rootStyle.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'newRootValue':
          timer = new Timer(() => {
            const [_, index, value] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.height = `${(value / largestValue) * 100}%`;
            barStyle.color = 'green';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'newChildValue':
          timer = new Timer(() => {
            const [_, index, value] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.height = `${(value / largestValue) * 100}%`;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'rootChangingEnd':
          timer = new Timer(() => {
            const [_, firstIndex, secondIndex] = animations[i];
            arrayBars[firstIndex].style.backgroundColor = 'green';
            arrayBars[secondIndex].style.backgroundColor = 'green';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'rootPutToTheEndStart':
          timer = new Timer(() => {
            const [_, endIndex, rootIndex] = animations[i];
            arrayBars[endIndex].style.backgroundColor = 'orange';
            arrayBars[rootIndex].style.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'newRoot2':
          timer = new Timer(() => {
            const [_, rootIndex, value] = animations[i];
            arrayBars[rootIndex].style.height = `${(value / largestValue) * 100}%`;
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'newChild2':
          timer = new Timer(() => {
            const [_, childIndex, value] = animations[i];
            arrayBars[childIndex].style.height = `${(value / largestValue) * 100}%`;
          }, i * 100);
          firstTimers.push(timer);
          break;
        case 'rootPutToTheEndEnd':
          timer = new Timer(() => {
            const [_, endIndex, rootIndex] = animations[i];
            arrayBars[endIndex].style.backgroundColor = 'green';
            arrayBars[endIndex].style.backgroundColor = 'green';
          }, i * 100);
          firstTimers.push(timer);
          break;
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

  const handleShuffle = () => {
    generateNewArray();
  };

  return (
    <div className="srt__visual__container">
      <Header
        handleArrayGenerate={generateNewArray}
        handleBarNumberChange={(value) => {
          window.localStorage.setItem('arraySize', value);
          setArraySize(value);
        }}
        handleStart={handleStart}
        handleStop={handleStop}
        handleResume={handleResume}
        handleShuffle={handleShuffle}
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

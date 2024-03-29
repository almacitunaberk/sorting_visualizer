import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  mergeSort,
  quickSort,
  heapSort,
  bubbleSort,
  selectionSort,
  insertionSort,
} from '../../sortingAlgorithms/sortingAlgorithms';
import { setArraySize, setArray, setLargestValue } from '../../redux/slices/arraySlice';
import Header from '../Header/Header';
import './SortingVisualizer.css';
import Timer from '../../utils/Timer';

const SortingVisualizer = () => {
  const { algo, isStop } = useSelector((state) => state.selectedAlgo);
  const arrayState = useSelector((state) => state.arrayState);
  const { arraySize, largestValue, array, isGenerateNew } = arrayState;
  const dispatch = useDispatch();
  let firstTimers = useRef([]);
  let secondTimers = useRef([]);
  const [wait, setWait] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const generateRandomArray = () => {
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
      bars[i].style.backgroundColor = '#287bff';
    }
    return [newArray, tempLargestVal];
  };

  const resetArray = () => {
    setIsStarted(false);
    const [newArray, newLargestValue] = generateRandomArray();
    dispatch(setArray(newArray));
    dispatch(setLargestValue(newLargestValue));
  };

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  useEffect(() => {
    resetArray();
    firstTimers.current.forEach((timer) => timer.destroy());
    secondTimers.current.forEach((timer) => timer.destroy());
    firstTimers.current = [];
    secondTimers.current = [];
    setIsStarted(false);
    setWait(false);
  }, [isGenerateNew]);

  const generateRandomNubmer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleStart = () => {
    if (isStarted) {
      return;
    }
    setIsStarted(true);
    switch (algo) {
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
    const copyArray = array.slice();
    const animations = mergeSort(copyArray);
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
        firstTimers.current.push(firstTimer);
      } else {
        const secondTimer = new Timer(function () {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${(newHeight / largestValue) * 100}%`;
        }, i * 100);
        secondTimers.current.push(secondTimer);
      }
    }
  };

  const handleBubbleSort = () => {
    const copyArray = array.slice();
    const animations = bubbleSort(copyArray);
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
        firstTimers.current.push(firstTimer);
      } else {
        const secondTimer = new Timer(function () {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${(newHeight / largestValue) * 100}%`;
          barStyle.backgroundColor = 'green';
        }, i * 100);
        secondTimers.current.push(secondTimer);
      }
    }
  };

  const handleSelectionSort = () => {
    const copyArray = array.slice();
    const animations = selectionSort(copyArray);
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
        firstTimers.current.push(firstTimer);
      } else {
        const secondTimer = new Timer(function () {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${(newHeight / largestValue) * 100}%`;
          barStyle.backgroundColor = 'green';
        }, i * 100);
        secondTimers.current.push(secondTimer);
      }
    }
  };

  const handleInsertionSort = () => {
    const copyArray = array.slice();
    const animations = insertionSort(copyArray);
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
          firstTimers.current.push(firstTimer);
          break;
        case 'swap':
          const _firstTimer = new Timer(function () {
            const [__, barIdx, newHeight] = animations[i];
            const barStyle = arrayBars[barIdx].style;
            barStyle.height = `${(newHeight / largestValue) * 100}%`;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.current.push(_firstTimer);
          break;
        case 'final':
          const secondTimer = new Timer(function () {
            const [__, barIdx, newHeight] = animations[i];
            const barStyle = arrayBars[barIdx].style;
            barStyle.height = `${(newHeight / largestValue) * 100}%`;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          secondTimers.current.push(secondTimer);
          break;
        case 'color_change':
          const __firstTimer = new Timer(function () {
            const [__, barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.backgroundColor = 'green';
            barTwoStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.current.push(__firstTimer);
          break;
      }
    }
  };

  const handleQuickSort = () => {
    const copyArray = array.slice();
    const animations = quickSort(copyArray);
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
          firstTimers.current.push(timer);
          break;
        case 'comparisonWithPivotEnd':
          timer = new Timer(function () {
            const [_, index, __] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.current.push(timer);
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
          firstTimers.current.push(timer);
          break;
        case 'changeColor':
          timer = new Timer(function () {
            const [_, index] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'pivotStart':
          timer = new Timer(function () {
            const [_, pivotIndex, __] = animations[i];
            arrayBars[pivotIndex].style.backgroundColor = 'purple';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'pivotEnd':
          timer = new Timer(function () {
            const [_, pivotIndex] = animations[i];
            arrayBars[pivotIndex].style.backgroundColor = 'green';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
      }
    }
  };

  const handleHeapSort = () => {
    const copyArray = array.slice();
    const animations = heapSort(copyArray);
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
          firstTimers.current.push(timer);
          break;
        case 'comparisonWithLargestEnd':
          timer = new Timer(() => {
            const [_, index, largest] = animations[i];
            const barStyle = arrayBars[index].style;
            const largestBarStyle = arrayBars[largest].style;
            barStyle.backgroundColor = 'orange';
            largestBarStyle.backgroundColor = 'purple';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'largestChanged':
          timer = new Timer(() => {
            const [_, index, prevLargest] = animations[i];
            const barStyle = arrayBars[index].style;
            const prevBarStyle = arrayBars[index].style;
            barStyle.backgroundColor = 'purple';
            prevBarStyle.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'rootChangingStart':
          timer = new Timer(() => {
            const [_, largest, root] = animations[i];
            const barStyle = arrayBars[largest].style;
            const rootStyle = arrayBars[root].style;
            barStyle.backgroundColor = 'purple';
            rootStyle.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'newRootValue':
          timer = new Timer(() => {
            const [_, index, value] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.height = `${(value / largestValue) * 100}%`;
            barStyle.color = 'green';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'newChildValue':
          timer = new Timer(() => {
            const [_, index, value] = animations[i];
            const barStyle = arrayBars[index].style;
            barStyle.height = `${(value / largestValue) * 100}%`;
            barStyle.backgroundColor = 'green';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'rootChangingEnd':
          timer = new Timer(() => {
            const [_, firstIndex, secondIndex] = animations[i];
            arrayBars[firstIndex].style.backgroundColor = 'green';
            arrayBars[secondIndex].style.backgroundColor = 'green';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'rootPutToTheEndStart':
          timer = new Timer(() => {
            const [_, endIndex, rootIndex] = animations[i];
            arrayBars[endIndex].style.backgroundColor = 'orange';
            arrayBars[rootIndex].style.backgroundColor = 'orange';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'newRoot2':
          timer = new Timer(() => {
            const [_, rootIndex, value] = animations[i];
            arrayBars[rootIndex].style.height = `${(value / largestValue) * 100}%`;
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'newChild2':
          timer = new Timer(() => {
            const [_, childIndex, value] = animations[i];
            arrayBars[childIndex].style.height = `${(value / largestValue) * 100}%`;
          }, i * 100);
          firstTimers.current.push(timer);
          break;
        case 'rootPutToTheEndEnd':
          timer = new Timer(() => {
            const [_, endIndex, rootIndex] = animations[i];
            arrayBars[endIndex].style.backgroundColor = 'green';
            arrayBars[endIndex].style.backgroundColor = 'green';
          }, i * 100);
          firstTimers.current.push(timer);
          break;
      }
    }
  };

  const handleStopResume = () => {
    if (!isStarted) {
      return;
    }
    if (!wait) {
      firstTimers.current.forEach((timer) => {
        timer.pause();
      });
      secondTimers.current.forEach((timer) => {
        timer.pause();
      });
    } else {
      firstTimers.current.forEach((timer) => {
        timer.resume();
      });
      secondTimers.current.forEach((timer) => {
        timer.resume();
      });
    }
    setWait((prev) => !prev);
  };

  return (
    <div className="srt__visual__container">
      <Header
        handleArrayGenerate={resetArray}
        handleStart={handleStart}
        handleStopResume={handleStopResume}
        wait={wait}
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

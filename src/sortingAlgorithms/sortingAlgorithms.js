export const mergeSort = (array) => {
  const animations = [];
  if (array.length <= 1) return animations;
  const tempArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, tempArray, animations);
  return animations;
};

const mergeSortHelper = (array, startIndex, endIndex, tempArray, animations) => {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(tempArray, startIndex, middleIndex, array, animations);
  mergeSortHelper(tempArray, middleIndex + 1, endIndex, array, animations);
  merge(array, startIndex, middleIndex, endIndex, tempArray, animations);
};

const merge = (array, startIndex, middleIndex, endIndex, tempArray, animations) => {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= endIndex) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (tempArray[i] <= tempArray[j]) {
      animations.push([k, tempArray[i]]);
      array[k] = tempArray[i];
      k++;
      i++;
    } else {
      animations.push([k, tempArray[j]]);
      array[k] = tempArray[j];
      k++;
      j++;
    }
  }
  while (i <= middleIndex) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, tempArray[i]]);
    array[k] = tempArray[i];
    k++;
    i++;
  }
  while (j <= endIndex) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, tempArray[j]]);
    array[k] = tempArray[j];
    k++;
    j++;
  }
};

export const bubbleSort = (array) => {
  const animations = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, temp]);
        swap(array, j, j + 1);
      } else {
        animations.push([j, array[j]]);
        animations.push([j + 1, array[j + 1]]);
      }
    }
  }
  return animations;
};

const swap = (array, index1, index2) => {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

export const selectionSort = (array) => {
  const animations = [];
  for (let i = 0; i < array.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([i, j]);
      if (array[j] < array[smallestIndex]) {
        let temp = array[smallestIndex];
        animations.push([i, array[j]]);
        animations.push([j, temp]);
        array[i] = array[j];
        array[j] = temp;
      } else {
        animations.push([i, array[i]]);
        animations.push([j, array[j]]);
      }
    }
  }
  return animations;
};

export const insertionSort = (array) => {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    let index = i;
    let value = array[i];
    for (let j = i - 1; j >= 0; j--) {
      animations.push(['comparison', i, j]);
      if (array[j] > value) {
        animations.push(['swap', j + 1, array[j]]);
        index = j;
        array[j + 1] = array[j];
      } else {
        animations.push(['color_change', i, j]);
      }
    }
    animations.push(['final', index, value]);
    array[index] = value;
  }
  return animations;
};

export const heapSort = (array) => {};

export const quickSort = (array) => {
  const animations = [];
  return quickSortHelper(array, 0, array.length - 1, animations);
};

const quickSortHelper = (array, left, right, animations) => {
  let i;
  if (array.length > 1) {
    i = partition(array, left, right, animations);
    if (left < i - 1) {
      quickSortHelper(array, left, i - 1, animations);
    }
    if (i < right) {
      quickSortHelper(array, i, right, animations);
    }
  }
  return animations;
};

const partition = (array, startIndex, endIndex, animations) => {
  const pivotIndex = Math.floor((startIndex + endIndex) / 2);
  let changedPivotIndex = pivotIndex;
  let pivot = array[pivotIndex];
  animations.push(['pivotStart', pivotIndex, null]);
  let leftIndex = startIndex;
  let rightIndex = endIndex;
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      animations.push(['comparisonWithPivotStart', leftIndex, pivotIndex]);
      animations.push(['comparisonWithPivotEnd', leftIndex, pivotIndex]);
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      animations.push(['comparisonWithPivotStart', rightIndex, pivotIndex]);
      animations.push(['comparisonWithPivotEnd', rightIndex, pivotIndex]);
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      if (leftIndex !== pivotIndex) {
        animations.push(['comparisonWithPivotStart', leftIndex, pivotIndex]);
        animations.push(['comparisonWithPivotEnd', leftIndex, pivotIndex]);
      }
      if (rightIndex !== pivotIndex) {
        animations.push(['comparisonWithPivotStart', rightIndex, pivotIndex]);
        animations.push(['comparisonWithPivotEnd', rightIndex, pivotIndex]);
      }
      if (leftIndex !== pivotIndex) {
        animations.push(['changeColor', leftIndex]);
      }
      if (rightIndex !== pivotIndex) {
        animations.push(['changeColor', rightIndex]);
      }
      const temp = array[leftIndex];
      const isPivotLeft = leftIndex === pivotIndex;
      const isPivotRight = rightIndex === pivotIndex;
      if (isPivotLeft) {
        changedPivotIndex = rightIndex;
      }
      if (isPivotRight) {
        changedPivotIndex = leftIndex;
      }
      animations.push(['changeValue', leftIndex, array[rightIndex], isPivotRight]);
      array[leftIndex] = array[rightIndex];
      animations.push(['changeValue', rightIndex, temp, isPivotLeft]);
      array[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  }
  animations.push(['pivotEnd', changedPivotIndex]);
  return leftIndex;
};

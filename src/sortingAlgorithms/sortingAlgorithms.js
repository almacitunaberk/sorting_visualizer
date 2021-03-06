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
  //console.log(array);
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

export const quickSort = (array, startIndex = 0, endIndex = array.length - 1, animations) => {
  if (startIndex >= endIndex) return animations;
  let index = quickSortHelper(array, startIndex, endIndex);
  quickSort(array, startIndex, index - 1);
  quickSort(array, index + 1, endIndex);
};

const quickSortHelper = (array, startIndex, endIndex, animations) => {
  let pivot = array[startIndex];
  let index = startIndex;
  for (let i = startIndex + 1; i < endIndex; i++) {
    if (pivot > array[i]) {
      index++;
      const temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
  }
  const temp = array[index];
  array[index] = pivot;
  array[startIndex] = temp;
  return index;
};

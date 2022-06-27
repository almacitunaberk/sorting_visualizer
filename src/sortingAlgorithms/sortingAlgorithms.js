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
      animations.push([i, j]);
      animations.push([i, j]);
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
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

export const heapSort = (array) => {};

export const quickSort = () => {};

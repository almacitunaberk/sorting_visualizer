export const mergeSort = (array) => {
  if (array.length === 1) return array;
  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);
  const sortedArray = merge(sortedLeftHalf, sortedRightHalf);
  return sortedArray;
};

const merge = (leftArray, rightArray) => {
  const finalArray = [];
  let i = 0;
  let j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      finalArray.push(leftArray[i]);
      i++;
    } else {
      finalArray.push(rightArray[j]);
      j++;
    }
  }
  while (i < leftArray.length) {
    finalArray.push(leftArray[i]);
    i++;
  }
  while (j < rightArray.length) {
    finalArray.push(rightArray[j]);
    j++;
  }
  return finalArray;
};

export const bubbleSort = () => {};

export const heapSort = () => {};

export const quickSort = () => {};

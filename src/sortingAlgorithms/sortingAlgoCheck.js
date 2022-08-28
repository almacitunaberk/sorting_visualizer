const quickSort = (array) => {
  const animations = [];
  if (array.length <= 1) return animations;
  const tempArray = array.slice();
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
};

const _quickSort = (array, left, right) => {
  let i;
  if (array.length > 1) {
    i = quickSortHelper(array, left, right, []);
    if (left < i - 1) {
      _quickSort(array, left, i - 1);
    }
    if (i < right) {
      _quickSort(array, i, right);
    }
  }
  return array;
};

const quickSortHelper = (arr, startIndex, endIndex, animations) => {
  let pivot = arr[startIndex];
  let i = startIndex;
  let j = endIndex;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      let k = arr[i];
      arr[i] = arr[j];
      arr[j] = k;
      i++;
      j--;
    }
  }
  return i;
};
const array = [3, 7, 1, 6, 12, 34, 78, 23, 45, 42, 57, 37, 83, 53];
console.table(_quickSort(array, 0, array.length - 1));

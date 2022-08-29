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

const heapSort = (array) => {
  let N = array.length;

  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(array, N, i);
  }

  for (let i = N - 1; i >= 0; i--) {
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapify(array, i, 0);
  }

  return array;
};

const heapify = (array, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;
    heapify(array, n, largest);
  }
};

const array = [3, 7, 1, 6, 12, 34, 78, 23, 45, 42, 57, 37, 83, 53];
console.table(heapSort(array));

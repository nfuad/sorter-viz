import swap from "./utils/swap";

function* heapSort(arr) {
  for (let i = arr.length; i >= 0; i--) {
    yield* heapify(arr, arr.length, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, 0);
    yield;
    yield* heapify(arr, i, 0);
  }
}

function* heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[largest] < arr[left]) largest = left;
  if (right < n && arr[largest] < arr[right]) largest = right;
  if (largest != i) {
    swap(arr, i, largest);
    yield;
    yield* heapify(arr, n, largest);
  }
}

export default heapSort;

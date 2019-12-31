import swap from "./utils/swap";

function* quickSortHoare(values) {
  yield* _quickSortHoare(values, 0, values.length - 1);
}

function* _quickSortHoare(values, left, right) {
  if (left >= right) {
    return;
  }
  let partitionGenerator = _partitionHoare(values, left, right);

  let result = partitionGenerator.next();
  while (!result.done) {
    result = partitionGenerator.next();
    yield 1;
  }

  let idx = result.value;
  yield* _quickSortHoare(values, left, idx);
  yield* _quickSortHoare(values, idx + 1, right);
}

function* _partitionHoare(values, left, right) {
  let pivotIdx = left + Math.floor((right - left) / 2);
  let pivot = values[pivotIdx];
  while (true) {
    while (values[left] < pivot) left++;
    while (values[right] > pivot) right--;
    if (left >= right) return right;
    swap(values, left++, right--);
    yield;
  }
}

export default quickSortHoare;

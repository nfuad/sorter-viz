import swap from "./utils/swap";

function* quickSortLomuto(values) {
  yield* _quickSortLomuto(values, 0, values.length - 1);
}

function* _quickSortLomuto(values, left, right) {
  if (left >= right) {
    return;
  }
  let partitionGenerator = _partitionLomuto(values, left, right);

  let result = partitionGenerator.next();
  while (!result.done) {
    result = partitionGenerator.next();
    yield 1;
  }

  let idx = result.value;
  yield* _quickSortLomuto(values, left, idx - 1);
  yield* _quickSortLomuto(values, idx + 1, right);
}

function* _partitionLomuto(values, left, right) {
  let pivot = values[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (values[j] < pivot) {
      swap(values, ++i, j);
      yield;
    }
  }
  swap(values, i + 1, right);
  yield;
  return i + 1;
}

export default quickSortLomuto;

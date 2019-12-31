import swap from "./utils/swap";

function* selectionSort(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[minIdx]) {
        minIdx = j;
      }
    }
    swap(values, i, minIdx);
    yield;
  }
}

export default selectionSort;

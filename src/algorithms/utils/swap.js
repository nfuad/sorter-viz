function swap(array, firstIdx, secondIdx) {
  [array[firstIdx], array[secondIdx]] = [array[secondIdx], array[firstIdx]];
}

export default swap;

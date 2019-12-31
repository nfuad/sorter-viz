function* shellSort(values) {
  let n = values.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let tmp = values[i];
      let j = i;
      for (j = i; j >= gap && values[j - gap] > tmp; j -= gap) {
        values[j] = values[j - gap];
        yield;
      }
      values[j] = tmp;
      yield;
    }
  }
}

export default shellSort;

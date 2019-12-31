function* radixSortLSD(array) {
  let values = [...array];
  let counter = new Array(10).fill(0);
  let n = values.length;
  let radix = 1;
  let max = Math.max(...array);

  while (radix < max) {
    for (let i = 0; i < n; i++) {
      counter[parseInt(values[i] / radix) % 10]++;
    }

    for (let i = 1; i < counter.length; i++) {
      counter[i] = counter[i] + counter[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
      array[--counter[parseInt(values[i] / radix) % 10]] = values[i];
      yield;
    }

    values = [...array];
    counter.fill(0, 0);

    radix *= 10;
  }
}

export default radixSortLSD;

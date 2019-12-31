import getNextGap from "./utils/getNextGap";

function* combSort(a) {
  let n = a.length;
  let gap = n;
  let swapped = true;
  while (gap !== 1 || swapped) {
    gap = getNextGap(gap);
    swapped = false;
    for (let i = 0; i < n - gap; i++) {
      if (a[i] > a[i + gap]) {
        [a[i], a[i + gap]] = [a[i + gap], a[i]];
        yield;
        swapped = true;
      }
    }
  }
}

export default combSort;

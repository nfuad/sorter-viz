function* mergeSort(values) {
  yield* _mergeSort(values, 0, values.length - 1);
}

function* _mergeSort(values, l, r) {
  if (l >= r) return;
  const m = l + Math.floor((r - l) / 2);
  yield* _mergeSort(values, l, m);
  yield* _mergeSort(values, m + 1, r);
  yield* _merge(values, l, m, r);
}

function* _merge(values, l, m, r) {
  const n1 = m - l + 1;
  const n2 = r - m;
  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = values[l + i];
  for (let j = 0; j < n2; j++) R[j] = values[m + 1 + j];

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) values[k++] = L[i++];
    else values[k++] = R[j++];
    yield;
  }

  while (i < n1) {
    values[k++] = L[i++];
    yield;
  }

  while (j < n2) {
    values[k++] = R[j++];
    yield;
  }
}

export default mergeSort;

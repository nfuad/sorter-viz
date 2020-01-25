<script>
  import P5Canvas from "../P5Canvas.svelte";

  import {
    bogoSort,
    bubbleSort,
    combSort,
    heapSort,
    insertionSort,
    mergeSort,
    quickSortHoare,
    quickSortLomuto,
    radixSortLSD,
    selectionSort,
    shellSort
  } from "../../algorithms";

  const sketch = p5 => {
    const CONTROL_HEIGHT = 20;
    const TILE_WIDTH = 20;

    const GET_SORTER = sorter => {
      const sorters = {
        bubbleSort: () => bubbleSort,
        insertionSort: () => insertionSort,
        selectionSort: () => selectionSort,
        quickSortHoare: () => quickSortHoare,
        quickSortLomuto: () => quickSortLomuto,
        bogoSort: () => bogoSort,
        mergeSort: () => mergeSort,
        heapSort: () => heapSort,
        shellSort: () => shellSort,
        radixSortLSD: () => radixSortLSD,
        combSort: () => combSort,
        default: () => mergeSort
      };

      return (sorters[sorter] || sorters["default"])();
    };

    let N;
    let M;
    let values;
    let sorters;
    let sortersFinished;
    let select;

    window.addEventListener("SELECT_EVENT", evt =>
      startSorting(evt.detail.selected)
    );

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth / 1.4, p5.windowHeight / 1.4);
      p5.colorMode(p5.HSL, 360, 100, 100);
      p5.frameRate(60);
      N = Math.floor(p5.width / TILE_WIDTH);
      M = Math.floor(p5.height / TILE_WIDTH);
      values = new Array(M);
      sorters = new Array(M);
      startSorting();
    };

    const startSorting = algorithm => {
      values = new Array(M);
      sorters = new Array(M);
      sortersFinished = new Array(M);

      for (let i = 0; i < M; i++) {
        values[i] = new Array(N);
        for (let j = 0; j < N; j++) {
          values[i][j] = j;
        }
        p5.shuffle(values[i], true);
        sorters[i] = GET_SORTER(algorithm)(values[i]);
        sortersFinished[i] = false;
      }
    };

    p5.draw = () => {
      for (let i = 0; i < M; i++) {
        if (sorters[i].next().done) {
          sortersFinished[i] = true;
          continue;
        }
        for (let j = 0; j < N; j++) {
          let c = p5.color(p5.map(values[i][j], 0, N, 0, 360), 100, 50);
          p5.stroke(c);
          p5.fill(c);
          p5.rect(j * TILE_WIDTH, i * TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
        }
      }
    };
  };
</script>

<P5Canvas {sketch} id="v1" />

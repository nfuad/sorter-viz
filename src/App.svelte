<script>
  import GHCorner from "./GHCorner.svelte";
  import P5Canvas from "./P5Canvas.svelte";
  
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
  } from "./algorithms";

  let sketch = function(p5) {
    const FRAME_RATE = 60;
    const CONTROL_HEIGHT = 20;
    const TILE_WIDTH = 20;
    const DRAW_FRAMERATE = false;
    const DEFAULT_ALGO = "mergeSort";

    const SORT_CLASSES = {
      bubble: bubbleSort,
      insertion: insertionSort,
      selection: selectionSort,
      "quickSort (hoare)": quickSortHoare,
      "quickSort (lomuto)": quickSortLomuto,
      bogoSort: bogoSort,
      mergeSort: mergeSort,
      heapSort: heapSort,
      shellSort: shellSort,
      "radixSort (LSD)": radixSortLSD,
      combSort: combSort
    };

    let N;
    let M;
    let values;
    let sorters;
    let sortersFinished;
    let sel;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth / 1.3, p5.windowHeight / 1.3);
      p5.colorMode(p5.HSL, 360, 100, 100);
      p5.frameRate(FRAME_RATE);

      setupUI(DEFAULT_ALGO);

      N = Math.floor(p5.width / TILE_WIDTH);
      M = Math.floor(p5.height / TILE_WIDTH);

      values = new Array(M);
      sorters = new Array(M);

      startSorting(DEFAULT_ALGO);

      p5.textSize(20);
      p5.textStyle(p5.BOLD);
      p5.textAlign(p5.RIGHT);
    };

    function setupUI(initialValue) {
      sel = p5.createSelect();
      sel.position(10, 10);
      Object.keys(SORT_CLASSES).forEach(k => {
        sel.option(k);
      });
      sel.value(initialValue);
      sel.changed(() => startSorting(sel.value()));
    }

    function startSorting(algorithm) {
      values = new Array(M);
      sorters = new Array(M);
      sortersFinished = new Array(M);

      for (let i = 0; i < M; i++) {
        values[i] = new Array(N);
        for (let j = 0; j < N; j++) {
          values[i][j] = j;
        }
        p5.shuffle(values[i], true);
        sorters[i] = SORT_CLASSES[algorithm](values[i]);
        sortersFinished[i] = false;
      }
    }

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

      if (DRAW_FRAMERATE) drawFrameRate();
    };

    function drawFrameRate() {
      fill(255, 0, 0);
      text(Math.floor(frameRate()), width - 30, 30);
    }
  };
</script>

<GHCorner />
<P5Canvas sketch="{sketch}" />
<footer>
  Created with &gt;3 by
  <a href="https://nafis.co" target="_blank">Nafis Fuad</a> with
  <a href="https://svelte.dev/" target="_blank">Svelte</a> and
  <a href="https://p5js.org" target="_blank">P5.js</a>. Find the source code
  <a href="https://github.com/nfuad">here on GitHub</a>.
</footer>

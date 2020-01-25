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
    const GET_SORTER = (sorter, values) => {
      const sorters = {
        bubbleSort: () => bubbleSort(values),
        insertionSort: () => insertionSort(values),
        selectionSort: () => selectionSort(values),
        quickSortHoare: () => quickSortHoare(values),
        quickSortLomuto: () => quickSortLomuto(values),
        bogoSort: () => bogoSort(values),
        mergeSort: () => mergeSort(values),
        heapSort: () => heapSort(values),
        shellSort: () => shellSort(values),
        radixSortLSD: () => radixSortLSD(values),
        combSort: () => combSort(values),
        default: () => mergeSort(values)
      };
      return (sorters[sorter] || sorters["default"])();
    };

    let values,
      sorters,
      sortersFinished,
      selected,
      numbers,
      columnWidth,
      sorter,
      t0;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth / 1.4, p5.windowHeight / 1.4);
      reset();
      t0 = performance.now();
      p5.fill(255);

      window.addEventListener("SELECT_EVENT", evt => {
        console.log(evt);
        selected = evt.detail.selected;
        reset();
      });
    };

    const reset = () => {
      numbers = Array(50)
        .fill()
        .map(() => p5.random(1));
      columnWidth = p5.width / numbers.length;
      sorter = GET_SORTER(selected, numbers);
    };

    p5.draw = () => {
      p5.background("#333");

      for (let i = 0; i < numbers.length; i++) {
        let columnHeight = p5.map(numbers[i], 0, 1, 0, p5.height);
        p5.rect(i * columnWidth, p5.height, columnWidth, -columnHeight);
      }

      if (sorter.next().done) {
        let time = p5.round(performance.now() - t0) / 1000;
        // p5.print("Done!");
        // p5.print(
        //   `Sorted ${numbers.length} elements in approximately ${time} seconds.`
        // );
        // p5.noLoop();
      }
    };
  };
</script>

<P5Canvas {sketch} id="v2" />

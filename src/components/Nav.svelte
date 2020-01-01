<script>
  import GHCorner from "./GHCorner.svelte";

  const SORT_CLASSES = [
    { name: "Bubble Sort", algo: "bubbleSort" },
    { name: "Insertion Sort", algo: "insertionSort" },
    { name: "Selection Sort", algo: "selectionSort" },
    { name: "Quick Sort (hoare)", algo: "quickSortHoare" },
    { name: "Quick Sort (lomuto)", algo: "quickSortLomuto" },
    { name: "Bogo Sort", algo: "bogoSort" },
    { name: "Merge Sort", algo: "mergeSort" },
    { name: "Heap Sort", algo: "heapSort" },
    { name: "Shell Sort", algo: "shellSort" },
    { name: "Radix Sort (LSD)", algo: "radixSortLSD" },
    { name: "Comb Sort", algo: "combSort" }
  ];

  let selected;
</script>

<style>
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    position: sticky;
    top: 0;
    left: 0;
    background: #333;
    font-size: 15px;
  }

  p {
    margin-right: 20px;
  }
</style>

<nav>
  <GHCorner />

  <p>Choose A Sorting Algorithm:</p>
  <select
    bind:value={selected}
    on:change={() => {
      console.log(selected);
      const SELECT_EVENT = new CustomEvent('SELECT_EVENT', {
        detail: { selected }
      });
      window.dispatchEvent(SELECT_EVENT);
    }}>
    {#each SORT_CLASSES as sort_class}
      <option
        value={sort_class.algo}
        selected={sort_class.algo === 'mergeSort'}>
        {sort_class.name}
      </option>
    {/each}
  </select>
</nav>

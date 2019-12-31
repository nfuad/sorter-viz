import isSorted from "./utils/isSorted";
import shuffle from "./utils/shuffle";

function* bogoSort(values) {
  while (!isSorted(values)) {
    shuffle(values, true);
    yield;
  }
}

export default bogoSort;

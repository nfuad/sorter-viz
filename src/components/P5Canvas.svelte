<script>
  import p5 from "p5";
  import { onMount } from "svelte";

  onMount(function() {
    let myp5 = new p5(sketch, id);
  });

  export let id;
  export let sketch;
</script>

<div {id}></div>

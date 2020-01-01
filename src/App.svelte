<script>
  import Footer from "./components/Footer.svelte";
  import Nav from "./components/Nav.svelte";
  import Visualizer1 from "./components/visualizers/Visualizer1.svelte";
  import Visualizer2 from "./components/visualizers/Visualizer2.svelte";
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
  }
</style>

<div class="wrapper">
  <Nav />
  <Visualizer1 />
  <Visualizer2 />
  <Footer />
</div>

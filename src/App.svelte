<script>
  import { Router, Route } from "svelte-routing";
  export let url = "";
  import Footer from "./components/Footer.svelte";
  import Nav from "./components/Nav.svelte";
  import Visualizer1 from "./components/visualizers/Visualizer1.svelte";
  import Visualizer2 from "./components/visualizers/Visualizer2.svelte";
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    overflow: hidden;
  }
</style>

<Router {url}>
  <div class="wrapper">
    <Nav />
    <Route path="v1" component={Visualizer1} />
    <Route path="v2" component={Visualizer2} />
    <Route path="/" component={Visualizer1} />
    <Footer />
  </div>
</Router>

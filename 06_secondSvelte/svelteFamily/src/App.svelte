<script>
    import { onMount } from "svelte";
  import Home from "./component/Home/Home.svelte";
    import Pibling from "./component/Pibling/Pibling.svelte";

  const piblings = ["John", "Mark"]
  const niblings = [{
    id: 1,
    name: "Ann",
    isGirl: true,
  },
  {
    id: 2,
    name: "Emily",
    isGirl: true,
    blackSheep: "medium-black-sheep",

  },
  {
    id:3,
    name: "Shaq",
    blackSheep: "ultra-black-sheep"
  }]
</script>

<Home>
  <h2> This is the home of the svelte family</h2>
  <Pibling name={piblings[0]} niblings={niblings}/>
  <Pibling name={piblings[1]} niblings={niblings}/>
</Home>
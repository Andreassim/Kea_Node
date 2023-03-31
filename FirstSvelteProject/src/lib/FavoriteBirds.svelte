<script>
    import Bird from "./Bird.svelte";

    const birds= ["Duck", "Penguin", "Chicken"];
    const birdEmojis = ["🦆", "🐧", "🐓"];

    let birdIndex = 0;
    
    function changeFavoriteBird(){
        birdIndex = (birdIndex + 1) % birds.length
    }
</script>

<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
   <Bird
        name={birds[birdIndex]} 
        emoji={birdEmojis[birdIndex]}
    />
</div>

<style>
    h2 {
        user-select: none;
    }
</style>
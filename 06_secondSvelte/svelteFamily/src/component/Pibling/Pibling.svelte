<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    function handleShowLove(message) {
        console.log(message);
    }

    function handleAskAllowance(message, amount){
        console.log(message);
        niblings.map(nibling => nibling.money = amount)
        console.log(niblings);
    }

</script>

<h2>{name}</h2>
{#each niblings as nibling (nibling.id)}
   <Nibling nibling={nibling} onShowLove={handleShowLove} piblingName={name} onAskAllowance={handleAskAllowance}/>    
{/each}
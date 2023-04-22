<script>
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onAskAllowance

    import { refrigeratorMessages } from "../../stores/refrigeratorMessages.js";

    let refrigeratorMessage = ""

    function handleWriteRefrigeratorMessage() {
        refrigeratorMessages.update((refrigeratorMessages) => {
            refrigeratorMessages.push(refrigeratorMessage)
            return refrigeratorMessages;
        });
        refrigeratorMessage = "";
    }

</script>

<div class:is-girl={nibling.isGirl} 
    class:is-boy={!nibling.isGirl} 
    class={nibling.blackSheep || "not-a-black-sheep"}>
    {#if nibling.isGirl}
    <p>Niece: {nibling.name}</p>
    {:else}
    <p>Nephew: {nibling.name}</p>
    {/if}
    <button on:click={() => onShowLove(`Hey ${piblingName}, it's me ${nibling.name} and I love you`)}>Show Love</button>
    <button on:click={() => onAskAllowance(`Hey ${piblingName}, can I get 100 BTC?`, 100)}>Ask for 100BTC</button>
    <p>Money: {nibling.money || 0} BTC</p>
    <p>Messages on the refrigerator {$refrigeratorMessages.length}</p>
    <input bind:value={refrigeratorMessage}>
    <button on:click={handleWriteRefrigeratorMessage}>Write on refrigerator</button>
</div>


<style>
    .not-a-black-sheep {
        background-color: aliceblue;
        color: black;
    }

    .medium-black-sheep {
        background-color: rebeccapurple;
        color: yellow;
    }

    .ultra-black-sheep {
        background-color: red;
        color: black;
    }

    .is-girl {
        border: 3px solid pink;
    }

    .is-boy {
        border: 3px solid blue;
    }
</style>

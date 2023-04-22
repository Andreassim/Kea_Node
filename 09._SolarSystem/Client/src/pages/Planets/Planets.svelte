<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globalsStore.js";

    onMount(async () => {
        console.log($BASE_URL);
        const response = await fetch($BASE_URL + '/planets', {
            credentials: "include"
        });
        const { data: planets} = await response.json();

        console.log(planets);
    });

</script>

<h1>This is Planets</h1>
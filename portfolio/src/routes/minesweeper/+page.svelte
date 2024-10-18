<script>
  import UserInterface from './lib/UserInterface.svelte';
  import DifficultySelection from "./lib/DifficultySelection.svelte";
  import { base } from '$app/paths';

</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="{base}/bobomb.png">
    <title>Minesweeper</title>
</svelte:head>

<main>
    <DifficultySelection/>
    <UserInterface/>
</main>

<style>
    main {
        background-image: linear-gradient(to right, #434343 0%, black 100%);
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
        caret-color: transparent;
        color: black;
    }
</style>
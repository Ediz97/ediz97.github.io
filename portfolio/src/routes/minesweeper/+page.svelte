<script>
  import UserInterface from './lib/UserInterface.svelte';
  import DifficultySelection from "./lib/DifficultySelection.svelte";

</script>

<main>
    <DifficultySelection/>
    <UserInterface/>
    <img src="/bobomb.png" alt="A bomb.">
</main>

<style>
    img {
        position: fixed;
        height: 339px;
        width: 292px;
        bottom: 30px;
        right: 15px;
        pointer-events: none;
        user-select: none;
    }

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
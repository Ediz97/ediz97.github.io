<script>
  import { tilesPerRow, totalTiles, bombCount, flagCount, amountRemainingTiles, gameStarted, markedTiles } from "./stores.js";

  let difficultySelection = 'visible';

  function setDifficulty(selectedTilesPerRow, selectedTotalTiles, selectedBombsAndFlags) {
    tilesPerRow.set(selectedTilesPerRow);
    totalTiles.set(selectedTotalTiles);
    flagCount.set(selectedBombsAndFlags);
    bombCount.set(selectedBombsAndFlags);
    amountRemainingTiles.set(selectedTotalTiles - selectedBombsAndFlags);
    markedTiles.set(Array(selectedTotalTiles).fill(false));
    gameStarted.set(true);
    difficultySelection = 'hidden';
  }

</script>

<div id="difficultyPopup" style="visibility: {difficultySelection}" on:contextmenu|preventDefault>
    <div id="headline">
        <h1>Select a difficulty level</h1>
    </div>
    <div id="buttons">
        <button id="easy" on:click="{() => setDifficulty(9, 81, 10)}">Easy</button>
        <button id="medium" on:click="{() => setDifficulty(19, 266, 40)}">Medium</button>
        <button id="hard" on:click="{() => setDifficulty(27, 486, 99)}">Hard</button>
    </div>
</div>

<style>
    #difficultyPopup {
        display: flex;
        flex-flow: column;
        position: absolute;
        height: 400px;
        width: 700px;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        text-align: center;
        font-family: "Arial Black", serif;
        user-select: none;
        border-style: outset;
        background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
    }

    #headline {
        height: 30%;
        margin-top: 30px;
    }

    #buttons {
        display: flex;
        height: 60%;
        justify-content: space-evenly;
        align-items: center;
    }

    button {
        border: none;
        border-radius: 50px;
        height: 80px;
        width: 150px;
        font-family: "Arial Black", serif;
        font-size: 30px;
        font-weight: bolder;
        box-shadow: 0 4px #242424;
    }

    button:active {
        transform: translateY(2px);
        box-shadow: 0 2px #242424;
    }

    #easy {
        background: rgb(140, 215, 0);
    }

    #easy:hover {
        background: rgb(80, 155, 0);
    }

    #medium {
        background: rgb(235, 235, 0);
    }

    #medium:hover {
        background: rgb(175, 175, 0);
    }

    #hard {
        background: rgb(215, 0, 0);
    }

    #hard:hover {
        background: rgb(155, 0, 0);
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

</style>
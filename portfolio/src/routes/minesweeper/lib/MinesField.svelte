<script>
  import Cells from './Cells.svelte';
  import { bombCount, countNearbyBombs, gameStarted, neighbours, tilesPerRow, totalTiles, difficultyLevel } from './stores.js';
  import { createEventDispatcher } from 'svelte';

  let bombPlacements = [];
  let tileAtIndexIsClicked = [];
  let tileAtIndexIsFlagged = [];
  let tileAtIndexIsMarked = [];
  let bombsDetonated = false;
  let tilesCreated = false;
  let bombsPlaced = false;

  const dispatch = createEventDispatcher();

  $: if ($gameStarted) {
    if (!tilesCreated) {
      bombPlacements = Array($totalTiles).fill(true); // true hides all bombs
      tileAtIndexIsClicked = Array($totalTiles).fill(false); // if tile at a specific index is updated to be true, it will automatically be revealed through an event listener that reacts to this array
      tileAtIndexIsFlagged = Array($totalTiles).fill(false);
      tileAtIndexIsMarked = Array($totalTiles).fill(false);
      tilesCreated = true;
    }
  }

  function layBombs(firstTile) {
    if (bombsPlaced) {
      return;
    }
    bombPlacements = Array($totalTiles).fill(true);
    for (let i = 0; i < $bombCount; i++) {
      let randomPosition = Math.floor(Math.random() * bombPlacements.length);
      while (!bombPlacements[randomPosition] || randomPosition === firstTile.detail.index || neighbours(firstTile.detail.index).map(value => value + firstTile.detail.index).includes(randomPosition)) {
        randomPosition = Math.floor(Math.random() * bombPlacements.length);
      }
      bombPlacements[randomPosition] = false;
    }
    countNearbyBombs.set(true);
    bombsPlaced = true;
  }

  function gameOver() {
    dispatch('updateTimer', {
      timer: 'stop'
    });
    if (!bombsDetonated) {
      bombsDetonated = true;
      let highscore = localStorage.getItem($difficultyLevel);
      setTimeout(() => alert(`Game over!${highscore === null ? '' : `\nHighscore: ${highscore} seconds!`}`), 10);
    }
  }

  function revealNeighbours(tileIndex) {
    neighbours(tileIndex.detail.index).forEach((neighbour) => {
      if (tileAtIndexIsClicked[tileIndex.detail.index + neighbour] === false && !tileAtIndexIsFlagged[tileIndex.detail.index + neighbour]) {
        setTimeout(() => tileAtIndexIsClicked[tileIndex.detail.index + neighbour] = true, 25);
      }
    });
  }

</script>

<div id="MinesField" style="grid-template-columns: repeat({$tilesPerRow}, auto)">
    {#each bombPlacements as tile, tileIndex}
        <Cells hideBomb="{tile}" {bombPlacements} {tileIndex} {bombsDetonated} {tileAtIndexIsClicked}
                {tileAtIndexIsFlagged} {tileAtIndexIsMarked} on:updateTimer on:layBombs|once="{layBombs}"
                on:gameOver|once="{gameOver}" on:revealNeighbours="{revealNeighbours}"/>
    {/each}
</div>

<style>
    #MinesField {
        display: grid;
        margin: 0 30px 30px 30px;
        border: 2px black solid;
        grid-gap: 2px;
        background: black;
    }
</style>
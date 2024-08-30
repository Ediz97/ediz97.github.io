<script>
  import { createEventDispatcher } from 'svelte';
  import { neighbours, flagCount, amountRemainingTiles, countNearbyBombs, markedTiles } from "./stores.js";

  const dispatch = createEventDispatcher();
  const bombIcon = "&#128163;";
  const flagIcon = "&#128681;";

  export let tileAtIndexIsClicked;
  export let bombPlacements;
  export let tileAtIndexIsFlagged;
  export let tileAtIndexIsMarked;
  export let tileIndex;
  export let hideBomb = false;
  export let bombsDetonated = false;

  let clicked = false;
  let hideFlag = true;
  let hideQuestionMark = true;
  let nearbyBombs = 0;
  let mouseButtonsClicked = 0;

  $: if ($countNearbyBombs) {
    countBombs();
  }

  $: if (tileAtIndexIsClicked[tileIndex] && hideFlag && !clicked) { // reveals the field when clicked
    clicked = true;
    if (hideBomb) {
      amountRemainingTiles.update(tilesLeft => tilesLeft - 1);
    }
    setTimeout(bombAndNeighbourCheck);
  }

  $: if (mouseButtonsClicked === 2 && clicked) {
    let nearbyFlagsCount = 0;
    neighbours(tileIndex).forEach(value => {
      if (tileAtIndexIsFlagged[tileIndex + value]) {
        nearbyFlagsCount++;
      }
    });
    if (nearbyFlagsCount >= nearbyBombs && nearbyBombs !== 0) {
      dispatch('revealNeighbours', {
        index: tileIndex
      });
    }
    else {
      neighbours(tileIndex).forEach(value => {
        tileAtIndexIsMarked[tileIndex + value] = true;
      });
      markedTiles.set(tileAtIndexIsMarked)
    }
  }
  else {
    neighbours(tileIndex).forEach(value => {
      tileAtIndexIsMarked[tileIndex + value] = false;
    });
    markedTiles.set(tileAtIndexIsMarked);
  }

  $: if (bombsDetonated) { // tiles react to a game over scenario
    if (!hideBomb) {
      hideFlag = true;
      clicked = true;
    }
  }

  function countBombs() {
    if (bombPlacements[tileIndex] === false) {
      return;
    }
    neighbours(tileIndex).forEach((neighbour) => {
      if (bombPlacements[tileIndex + neighbour] === false) {
        nearbyBombs++;
      }
    });
  }

  function revealTile() {
    if (!hideFlag || !hideQuestionMark) {
      return;
    }
    dispatch('layBombs', {
      index: tileIndex
    });
    tileAtIndexIsClicked[tileIndex] = true; // the index of this specific tile is marked as 'true' so that it can indicate that it has been clicked to the event listener up top
  }

  function bombAndNeighbourCheck() {
    if (hideBomb) {
      dispatch('updateTimer', {
        timer: 'start'
      });
      if (nearbyBombs === 0) {
        dispatch('revealNeighbours', {
          index: tileIndex
        });
      }
    } else {
      dispatch('gameOver');
    }
  }

  function toggleFlag() {
    if (hideFlag && hideQuestionMark) {
      flagCount.update(flag => flag - 1);
      tileAtIndexIsFlagged[tileIndex] = true;
      hideFlag = false;
    } else if (!hideFlag && hideQuestionMark) {
      hideFlag = true;
      hideQuestionMark = false;
    } else {
      flagCount.update(flag => flag + 1);
      tileAtIndexIsFlagged[tileIndex] = false;
      hideQuestionMark = true;
    }
  }

</script>

<div class="Field" style="background: rgb({50 * (tileIndex % 2)}, {50 * (tileIndex % 2)}, {50 * (tileIndex % 2)})"
        on:mousedown="{() => mouseButtonsClicked++}"
        on:click="{() => mouseButtonsClicked = 0}"
        on:contextmenu="{() => mouseButtonsClicked = 0}"
        on:mouseleave="{() => mouseButtonsClicked = 0}">
    <p class:clicked={!clicked}
            class:hideBomb>
        {@html bombIcon}</p>
    <p class:hideFlag>{@html flagIcon}</p>
    <p class:hideQuestionMark style="font-size: 22px;">?</p>
    <p style="color: rgb({105 + (nearbyBombs * 35)}, {255 - nearbyBombs * 50}, 0)"
            class:clicked={!clicked}
            class:hideNumber="{nearbyBombs === 0 || !hideBomb}">{nearbyBombs}</p>
    <button
            class:clicked
            class:unmarked="{!$markedTiles[tileIndex]}"
            class:marked="{$markedTiles[tileIndex]}"
            class:gameFinished="{bombsDetonated || $amountRemainingTiles === 0}"
            on:click="{revealTile}"
            on:contextmenu="{toggleFlag}">
    </button>
</div>

<style>
    .Field {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
    }

    button {
        height: 100%;
        width: 100%;
    }

    .unmarked {
        background: whitesmoke;
    }

    button:hover, .marked {
        background: cornflowerblue;
    }

    .clicked, .hideFlag, .hideBomb, .hideNumber, .hideQuestionMark {
        visibility: hidden;
    }

    .gameFinished {
        pointer-events: none;
    }

    p {
        position: absolute;
        user-select: none;
        pointer-events: none;
        font-size: 125%;
        font-family: "Arial Black", serif;
    }
</style>
<script>
  import FlagsCount from './FlagsCount.svelte';
  import Timer from './Timer.svelte';
  import MinesField from './MinesField.svelte';
  import ResetButton from './ResetButton.svelte';
  import { amountRemainingTiles, timer, gameStarted, difficultyLevel } from "./stores.js";

  let userInterface = 'hidden';
  let stopwatchID;
  let timerActivated = false;

  $: if ($gameStarted) {
    userInterface = 'visible';
  }

  $: if ($amountRemainingTiles === 0) {
    clearInterval(stopwatchID);
    let highscore = getHighscore();
    setTimeout(() => alert(`You won!\nHighscore: ${highscore} seconds!`), 10);
  }

  function updateTimer(event) {
    if (event.detail.timer === 'start' && !timerActivated) {
      stopwatchID = setInterval(() => timer.update(seconds => seconds + 1), 1000);
      timerActivated = true;
    }
    else if (event.detail.timer === 'stop') {
      clearInterval(stopwatchID);
    }
  }

  function getHighscore() {
    let currentHighscore = localStorage.getItem($difficultyLevel);
    if (+`${currentHighscore}` > $timer || currentHighscore === null) {
      localStorage.setItem($difficultyLevel, $timer.toString());
      return $timer;
    }
    return currentHighscore;
  }

</script>

<div id="userInterface" style="visibility: {userInterface}" on:contextmenu|preventDefault>
    <div id="statistics">
        <FlagsCount/>
        <ResetButton/>
        <Timer/>
    </div>
    <MinesField on:updateTimer="{updateTimer}"/>
</div>

<style>
    #userInterface {
        display: flex;
        border-style: inset;
        flex-flow: column;
        position: absolute;
        height: min-content;
        width: min-content;
        margin: auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
    }

    #statistics {
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        height: 110px;
    }
</style>
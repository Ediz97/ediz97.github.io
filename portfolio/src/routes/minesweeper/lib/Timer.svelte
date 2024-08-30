<script>
  import { timer } from "./stores.js";
  const timeIcon = "&#9201;";
</script>

<div id="Timer">
    {@html timeIcon} {$timer}
</div>

<style>
    #Timer {
        display: flex;
        width: 150px;
        height: 50px;
        font-size: 35px;
        justify-content: flex-start;
        align-items: center;
        font-family: "Arial Black", serif;
        user-select: none;
    }
</style>
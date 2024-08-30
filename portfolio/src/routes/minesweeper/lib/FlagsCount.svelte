<script>
  import { flagCount } from "./stores.js";
  const flagIcon = "&#128681;"
</script>

<div id="FlagsCount">
    {@html flagIcon} {$flagCount}
</div>

<style>
    #FlagsCount {
        display: flex;
        width: 150px;
        height: 50px;
        font-size: 35px;
        justify-content: center;
        align-items: center;
        font-family: "Arial Black", serif;
        user-select: none;
    }
</style>
<script>
  const reloadIcon = "&#128472;";
  const reloadPage = () => {
    location.reload();
  }
</script>

<button id="ResetButton"
        on:click={reloadPage}>
    <p>{@html reloadIcon}</p>
</button>

<style>
    #ResetButton {
        display: flex;
        margin-top: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 0 2px #242424;
        background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
        justify-content: center;
        align-items: center;
    }

    #ResetButton:active {
        box-shadow: 0 0 #242424;
        transform: translateY(2px);
    }

    p {
        font-size: 30px;
        font-weight: bold;
    }
</style>
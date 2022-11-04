const onBlurCheck = document.querySelector("input");
onBlurCheck.addEventListener("blur", blurCheck);
function blurCheck(event) {
    const symbolCounter = event.currentTarget.value.trim().length;
    onBlurCheck.classList.add("invalid");
    if (symbolCounter === 6) {
        onBlurCheck.classList.remove("invalid");
        onBlurCheck.classList.add("valid");
    }
} 


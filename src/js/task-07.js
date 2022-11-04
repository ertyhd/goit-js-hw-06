const onInputControl = document.querySelector("#font-size-control");
const textTarget = document.querySelector("#text");
onInputControl.addEventListener("input", ontSizeChange);
function ontSizeChange(event) {
    textTarget.style.fontSize = `${event.currentTarget.value}px`;
}

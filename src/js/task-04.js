const refs = {
    valueAction: document.querySelector("#value"),
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
}

let counterValue = 0;
const render = () => {
    refs.valueAction.textContent = counterValue;
};
refs.decrement.addEventListener("click", () => {
    counterValue -= 1;
    render();
});
refs.increment.addEventListener("click", () => {
    counterValue += 1;
    render();
});
render();

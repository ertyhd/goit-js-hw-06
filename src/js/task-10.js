function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  onInputData: document.querySelector("input"),
  boxesArea: document.querySelector("#boxes"),
  onClickCreate: document.querySelector("[data-create]"),
  onClickDestroy: document.querySelector("[data-destroy]"),
};
let amount = 0;
const handleInputData = (event) => {
  amount = Number(event.target.value);
  
};
const handleClickCreate = () => {
  for (let i = 0; i < amount; i += 1) {
        let sizeCouter = 30 + i * 10;
        refs.boxesArea.insertAdjacentHTML("beforeend", `<div style="height: ${sizeCouter}px; width: ${sizeCouter}px; background-color: ${getRandomHexColor()}"></div>`);
      };
};
const destroyBoxes = () => {
  refs.boxesArea.innerHTML = "";
};
refs.onInputData.addEventListener("change", handleInputData);
refs.onClickCreate.addEventListener("click", handleClickCreate);
refs.onClickDestroy.addEventListener("click", destroyBoxes);

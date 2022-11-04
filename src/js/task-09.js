function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyStyle: document.querySelector("body"),
  onButtonClick: document.querySelector(".change-color"),
  bodyColor: document.querySelector(".color"),
};
refs.onButtonClick.addEventListener("click", render);
function render() {
  const colorClick = getRandomHexColor();
  refs.bodyStyle.style.backgroundColor = colorClick;
  refs.bodyColor.textContent = colorClick;
  console.log("colorClick ", colorClick);
  console.log("random 1 ", getRandomHexColor());
  console.log("random 2 ", getRandomHexColor());
};

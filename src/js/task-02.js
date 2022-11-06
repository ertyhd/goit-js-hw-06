const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arr = [];
const list = document.querySelector("#ingredients");
ingredients.map(ingredient => {
  const lastItem = document.createElement("li");
  lastItem.textContent = ingredient;
  lastItem.classList.add("item");
  arr.push(lastItem);
});
list.append(...arr);
console.log(list);

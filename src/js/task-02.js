const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.map(ingredient => {
  const lastItem = document.createElement("li");
  lastItem.textContent = ingredient;
  list.append(lastItem);
  lastItem.classList.add("item");
});
console.log(list);

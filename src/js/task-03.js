const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector(".gallery");

const imageEll = ({url, alt}) => {
  return `<li><img src = '${url}' alt = '${alt}' height = 300></img></li>`;
};
const imagesList = images.map(imageEll).join("");
list.insertAdjacentHTML("beforeend", imagesList);


// // Minimal Styles of images 

list.style.listStyle = "none";
list.style.display = "flex";
list.style.gap = "30px";



// Используй массив объектов images для создания элементов <img> вложенных
//  в <li>. Для создания разметки используй шаблонные строки и метод 
//  insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS
//  классы.

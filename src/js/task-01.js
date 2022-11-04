const categoriesEll = document.querySelector('#categories');
const categoriesItems = categoriesEll.querySelectorAll('.item');
console.log('Number of categories: ', categoriesItems.length);
console.log('');
categoriesItems.forEach(function(categoriesItem) {
    console.log('Category: ', categoriesItem.querySelector('h2').textContent);
    console.log('Elements: ', categoriesItem.querySelectorAll('li').length);
    console.log('');
})

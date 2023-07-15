const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const listOfIngredients = [];

ingredients.forEach(function (ingredient) {
  const liEl = document.createElement('li');

  liEl.textContent = ingredient;
  liEl.classList.add('item');

  listOfIngredients.push(liEl);
});

// console.log(listOfIngredients);
ingredientsEl.append(...listOfIngredients);
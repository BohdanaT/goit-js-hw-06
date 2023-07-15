const categoriesEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(function (category) {
    const titleEl = category.firstElementChild.textContent;
    const categoryList = category.lastElementChild.children.length;

    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${categoryList}`);
})
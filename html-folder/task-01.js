const categoriesEl = document.querySelector("#categories");
const categoriesItemEl = document.querySelectorAll(".item");
const getCategoriesForEach = categoriesItemEl.forEach((element, index, array) => {
    const titleEl = element.firstElementChild.textContent;
    console.log("Категория: " + titleEl);
    const lastChildEl = element.lastElementChild;
    const liChildEl = lastChildEl.children;
    console.log("Количество элементов: " + liChildEl.length) 
})


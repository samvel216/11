const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector("#ingredients");
const lalka = ingredients.forEach((element) => {
    let ingridientsItem = document.createElement("li");
    ingridientsItem.textContent = element;
    ingredientsEl.append(ingridientsItem);
});
    
    
  



 
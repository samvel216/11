const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsEl = document.querySelector('.ingridients-ul');

  const potatosEl = document.createElement('li');
  potatosEl.textContent = ingredients[0];

  const mushrumEl = document.createElement('li');
  mushrumEl.textContent = ingredients[1];

  const garlicEl = document.createElement('li');
  garlicEl.textContent = ingredients[2];

  const tomatoesEl = document.createElement('li');
  tomatoesEl.textContent = ingredients[3];

  const greensEl = document.createElement('li');
  greensEl.textContent = ingredients[4];

  const condimentsEl = document.createElement('li');
  condimentsEl.textContent = ingredients[5];

  ingredientsEl.append(potatosEl , mushrumEl , garlicEl , tomatoesEl , greensEl , condimentsEl);
  console.log(ingredientsEl);



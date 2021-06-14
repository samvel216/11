let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

function decrementy(event) {
   counterValue += 1;
   valueEl.textContent = counterValue;
}
function incrementy(event) {
   counterValue -= 1;
   valueEl.textContent = counterValue;
}
decrement.addEventListener('click' , incrementy);
increment.addEventListener('click' , decrementy);

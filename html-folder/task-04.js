const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const decrement = (event) => {
    event.preventDefault()
 valueEl.textContent = counterValue;
    counterValue = counterValue - 1;
    return counterValue;   
};
const increment = (event) => {
    event.preventDefault()
valueEl.textContent = counterValue;
    counterValue = counterValue + 1;
    return counterValue;
};
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);





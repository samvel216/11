const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
const inputFontSize = (event) => {
    event.preventDefault();
    spanText.style.fontSize = `${inputEl.value}px`;
 }
inputEl.addEventListener('input', inputFontSize);


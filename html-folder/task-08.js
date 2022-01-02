const divEl = document.querySelector('#controls');
const btnRenderEl = document.querySelector('[data-action="render"]');  /*создать */
const btnDestroyEl = document.querySelector('[data-action="destroy"]'); /*удалить */
const divBoxesEl = document.querySelector('#boxes');
const divInputEl = divEl.firstElementChild;
divInputEl.addEventListener('input', function () {
    btnRenderEl.addEventListener('click', createBoxes);
});
let massiveKubSize = [];
let massive = [];
const createBoxes = (amount) => {
    amount = divInputEl.value;
    for (let i = 0; i < amount; i += 1) {
        massive.push(i);
    }
    massive.reduce((previousValue, element, index, array) => {
        massiveKubSize.push(previousValue);
        return previousValue += 10;
    }, 30);
    massiveKubSize.forEach((element) => {
        let newDiv = document.createElement('div');
        newDiv.style.width = `${element}px`;
        newDiv.style.height = `${element}px`;
        let randomFirst = Math.floor(Math.random() * (255 - 1));
        let randomSecond = Math.floor(Math.random() * (255 - 1));
        let randomThird  = Math.floor(Math.random() * (255 - 1));
        newDiv.style.backgroundColor = `rgb(${randomFirst}, ${randomSecond}, ${randomThird})`;
        newDiv.classList.add("box");
        divBoxesEl.append(newDiv);
    });
}





const fontSizeControl = document.querySelector('#font-size-control');
let spanText = document.querySelector('#text');
fontSizeControl.addEventListener('input' , onInputInput);

function onInputInput(event) {
    let lalka = Number(fontSizeControl.value);
    spanText.style.fontSize = `${lalka}px`;
}




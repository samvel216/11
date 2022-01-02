/*Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет
 его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */



const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output"); 
const inputChange = (event) => {
    event.preventDefault()
    if (event.currentTarget.value === '') {
        spanEl.textContent = 'незнакомец';
    } else {
        spanEl.textContent = event.currentTarget.value; 
 }   
}
inputEl.addEventListener("input", inputChange);

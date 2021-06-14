const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input' , onInputInput);


function onInputInput(event) {
    if(event.currentTarget.value.length > 0) {
        nameOutput.textContent = event.currentTarget.value;
    } else if (event.currentTarget.value === "") {
        nameOutput.textContent = 'незнакомец';
    }  
}
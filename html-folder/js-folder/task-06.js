const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', onInputBlur);
const dataLength = Number(validationInput.dataset.length);
console.log(typeof dataLength);
function onInputBlur(event) {  
    if (event.currentTarget.value.length !== dataLength) {
    validationInput.classList.add('invalid');  
   } else if(event.currentTarget.value.length === dataLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
   } 
}
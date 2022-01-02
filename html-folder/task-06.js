const inputEl = document.querySelector("#validation-input");
const StringDataLength = inputEl.getAttribute("data-length");
const NumberDataLength = Number(StringDataLength); 
const inputFocus = (event) => {
    event.preventDefault();
}
const inputBlur = (event) => {
    event.preventDefault()
    inputEl.textContent = event.currentTarget.value;
    if (inputEl.textContent.length === NumberDataLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
}
inputEl.addEventListener('focus',inputFocus);
inputEl.addEventListener('blur', inputBlur);


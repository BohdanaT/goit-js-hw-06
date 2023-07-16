const validationInputEl = document.querySelector('#validation-input');
const validLength = Number(validationInputEl.dataset.length);


validationInputEl.addEventListener('blur', onInputBlur);


function onInputBlur(event) {
    validationInputEl.classList.add('invalid');

    if (event.currentTarget.value.length === validLength) {
        validationInputEl.classList.remove('invalid');
        validationInputEl.classList.add('valid');
    }
}
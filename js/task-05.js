const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    outputEl.textContent = inputEl.value || 'Anonymus';
}
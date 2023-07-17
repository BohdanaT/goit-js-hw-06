const fontSizeControlBarEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


fontSizeControlBarEl.addEventListener('input', onSizeControlBarChange);

function onSizeControlBarChange(event) {
   textEl.style.fontSize = `${event.target.value}px`;
}
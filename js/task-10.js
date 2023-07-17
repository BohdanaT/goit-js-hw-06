function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector('#controls'),
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
}

refs.createBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const divElement = document.createElement('div');
  divElement.style.width = '30px';
  divElement.style.height = '30px';
  divElement.style.backgroundColor = getRandomHexColor();
  
  refs.boxes.appendChild(divElement);
}

const controlsValue = Number(refs.controls.firstElementChild.value)
createBoxes(controlsValue);
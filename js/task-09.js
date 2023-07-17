function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bcgColorSpanEl = document.querySelector('.color')
const changeColorBtnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

changeColorBtnEl.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const bcgColor = getRandomHexColor();
  
  bcgColorSpanEl.textContent = bcgColor;
  bodyEl.style.backgroundColor = bcgColor;
}
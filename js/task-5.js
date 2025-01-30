function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function getBackgroundColor() {
  const body = document.querySelector('body');
  const newBgColor = getRandomHexColor();
  body.style.backgroundColor = newBgColor;
  
}

// можно было бы объединить функции и написать все в функции getBackgroundColor(), но несмотря на избыточность кода, мне кажется что код имеет более читабельный вид.

function renderColorValue() {
  let output = document.querySelector('.color')
  const newBgColor = getRandomHexColor();
  output.textContent = `${newBgColor}`
}

const button = document.querySelector('.change-color');

button.addEventListener('click', getBackgroundColor);
button.addEventListener('click', renderColorValue)
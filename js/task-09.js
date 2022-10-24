/**
 * Решение задачи №9
 */
const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");

button.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

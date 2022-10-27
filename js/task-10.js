/**
 * Решение задачи №10
 */
const render = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

render.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

let size = 30;
function createBoxes() {
  const counter = input.value;
  const markup = [];
  for (let i = 1; i <= counter; i += 1) {
    size += 10;
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div);
    console.log(markup);
  }
  boxes.append(...markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

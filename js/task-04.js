/**
 * Решение задачи №4
 */

const decrementBtnEl = document.querySelector(
  `button[data-action="decrement"]`
);
const incrementBtnEl = document.querySelector(
  `button[data-action="increment"]`
);
const counter = document.querySelector(`#value`);

decrementBtnEl.addEventListener("click", counterDown);
incrementBtnEl.addEventListener("click", counterUp);

let counterValue = 0;

function counterDown() {
  displayUpdate((counterValue -= 1));
}
function counterUp() {
  displayUpdate((counterValue += 1));
}

function displayUpdate(val) {
  counter.textContent = val;
}

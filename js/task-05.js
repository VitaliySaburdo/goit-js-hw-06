/**
 * Решение задачи №5
 */

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onSearch);

function onSearch(event) {
  if (event.currentTarget.value.length) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
}

/**
 * Решение задачи №6
 */

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurColor);

function onBlurColor() {
  if (input.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  } else if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

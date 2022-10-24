/**
 * Решение задачи №7
 */

const input = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

console.dir(input);
input.addEventListener("change", changeFontSize);

function changeFontSize() {
  textOutput.style.fontSize = input.value + "px";
}

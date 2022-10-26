/**
 * Решение задачи №7
 */

const input = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

console.dir(input);

input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  textOutput.style.fontSize = event.currentTarget.value + "px";
}

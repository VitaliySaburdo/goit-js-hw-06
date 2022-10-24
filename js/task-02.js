
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

/**
 * Решение задачи №2
 */

const listContainerEl = document.querySelector("#ingredients");

function createList(names) {
  return names.map((name) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = name;
    return listEl;
  });
}

const elements = createList(ingredients);
listContainerEl.append(...elements);

/**
 * Альтернативное решение задачи №2
 */

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   listEl.textContent = ingredients[i];
//   elements.push(listEl);
// }

// const elements = ingredients.map((names) => {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   listEl.textContent = names;
//   return listEl;
// });

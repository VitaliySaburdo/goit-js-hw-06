/**
 * Решение задачи №1
 */
const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

for (let i = 0; i < categoriesEl.length; i += 1) {
  console.log("Category: " + categoriesEl[i].querySelector("h2").textContent);
  console.log("Elements: " + categoriesEl[i].querySelectorAll("ul li").length);
}

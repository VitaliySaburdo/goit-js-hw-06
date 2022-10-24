/**
 * Решение задачи №8
 */

const form = document.querySelector(".login-form");

form.addEventListener("submit", onLogin);

function onLogin(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполненны!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  evt.currentTarget.reset();
}

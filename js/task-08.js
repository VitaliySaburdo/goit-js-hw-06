/**
 * Решение задачи №8
 */

const form = document.querySelector(".login-form");

form.addEventListener("submit", onLogin);

function onLogin(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    return alert("Все поля должны быть заполненны!");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  evt.currentTarget.reset();
}

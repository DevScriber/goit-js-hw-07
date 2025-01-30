const loginForm = document.querySelector(".login-form");
const loginButton = document.querySelector('button');

// стилизация кнопки
loginButton.textContent = 'Log in';
loginButton.classList.add('form-button')


loginForm.addEventListener("submit", getData);

function getData(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const formData = {};


  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  for (const element of form.elements) {
    if (element.name) {
      formData[element.name] = element.value.trim();
    }
  }

  console.log(formData);

  form.reset();
}

var form = document.querySelector("form");
var snackbar = document.querySelector(".snackbar");
const emails = ["leonardobrehm14@gmail.com", "andersonrw161196@gmail.com"];

function show_snack(message) {
  snackbar.textContent = message;
  snackbar.style.transition = "opacity 2s";
  snackbar.style.opacity = 1;
  setTimeout(function () {
    snackbar.style.opacity = 0;
  }, 5000);
}

const validateUser = (email, password) =>
  emails.includes(email) && password === "samsepiol";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  if (!validateUser(email.value, password.value)) {
    show_snack("email ou senha inválido!");
    return;
  }

  form.submit();
});

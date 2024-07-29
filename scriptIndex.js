document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitButton")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");

      const lsUser = localStorage.getItem(email.value);
      const user = JSON.parse(lsUser);

      emailError.textContent = "";
      passwordError.textContent = "";

      const emailErrorMessage = window.validateEmail(email.value);

      if (emailErrorMessage) {
        emailError.textContent = emailErrorMessage;
      }

      let loginError = "";

      if (user && user.password !== password.value) {
        loginError = "Password is incorrect";
      }

      const passwordErrorMessage =
        window.validatePassword(password.value) || loginError;

      if (passwordErrorMessage) {
        passwordError.textContent = passwordErrorMessage;
      }

      if (!emailErrorMessage && !passwordErrorMessage) {
        window.location.href = `${window.location.origin}/userPage.html`;
      }
    });

  email.addEventListener("input", function () {
    emailError.textContent = "";
  });

  password.addEventListener("input", () => {
    passwordError.textContent = "";
  });
});

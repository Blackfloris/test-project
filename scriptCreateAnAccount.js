document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnCreateAccount")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("createEmail");
      const password = document.getElementById("createPassword");
      const subscribe = document.getElementById("subscribe").checked;

      const firstNameError = document.getElementById("firstNameError");
      const lastNameError = document.getElementById("lastNameError");
      const emailError = document.getElementById("createEmailError");
      const passwordError = document.getElementById("createPasswordError");

      firstNameError.textContent = "";
      lastNameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";

      let lsUser = localStorage.getItem(email.value);
      if (lsUser) {
        emailError.textContent = "This email is already registered.";
        return;
      }

      const firstNameErrorMessage = window.validateFirstName(firstName.value);
      if (firstNameErrorMessage) {
        firstNameError.textContent = firstNameErrorMessage;
      }
      const lastNameErrorMessage = window.validateLastName(lastName.value);
      if (lastNameErrorMessage) {
        lastNameError.textContent = lastNameErrorMessage;
      }

      const emailErrorMessage = window.validateEmail(email.value);
      if (emailErrorMessage) {
        emailError.textContent = emailErrorMessage;
      }

      const passwordErrorMessage = window.validatePassword(password.value);
      if (passwordErrorMessage) {
        passwordError.textContent = passwordErrorMessage;
      }

      if (!subscribe) {
        alert("You must agree to the terms.");
        return;
      }

      if (
        !firstNameErrorMessage &&
        !lastNameErrorMessage &&
        !emailErrorMessage &&
        !passwordErrorMessage
      ) {
        const userData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
        };
        localStorage.setItem(email.value, JSON.stringify(userData));
        window.location.href = `${window.location.origin}/index.html`;
      }
    });

  firstName.addEventListener("input", function () {
    firstNameError.textContent = "";
  });
  lastName.addEventListener("input", function () {
    lastNameError.textContent = "";
  });
  email.addEventListener("input", function () {
    emailError.textContent = "";
  });
  password.addEventListener("input", function () {
    passwordError.textContent = "";
  });
});
document
  .getElementById("submitButtonForAccount")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = `${window.location.origin}/index.html`;
  });

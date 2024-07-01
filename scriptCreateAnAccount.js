document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("btnCreateAccount")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("createEmail").value.trim();
      const password = document.getElementById("createPassword").value.trim();
      const subscribe = document.getElementById("subscribe").checked;

      const firstNameError = document.getElementById("firstNameError");
      const lastNameError = document.getElementById("lastNameError");
      const emailError = document.getElementById("createEmailError");
      const passwordError = document.getElementById("createPasswordError");

      firstNameError.textContent = "";
      lastNameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";

      let isValid = true;

      if (!validateFirstName(firstName)) {
        isValid = false;
        if (firstName.length < 2) {
          firstNameError.textContent =
            "First name must be at least 2 letters long.";
        } else if (firstName.length > 20) {
          firstNameError.textContent =
            "First name must be no longer than 20 letters.";
        } else if (/^[a-zA-Z\s'-]+$/.test(firstName)) {
          firstNameError.textContent = "First name cannot contain symbols.";
        }
      }

      if (!validateLastName(lastName)) {
        isValid = false;
        if (lastName.length < 2) {
          lastNameError.textContent =
            "Last name must be at least 2 letters long.";
        } else if (lastName.length > 20) {
          lastNameError.textContent =
            "Last name must be no longer than 20 letters.";
        } else if (/^[a-zA-Z\s'-]+$/.test(lastName)) {
          lastNameError.textContent = "Last name cannot contain symbols.";
        }
      }

      if (!validateCreateEmail(email)) {
        isValid = false;
        if (email.length < 8) {
          emailError.textContent = "Email must be at least 8 letters long.";
        } else if (email.length > 20) {
          emailError.textContent = "Email must be no longer than 20 letters.";
        } else if (email.includes(" ")) {
          emailError.textContent = "Email cannot contain spaces.";
        } else {
          emailError.textContent =
            "That's not a valid email. Please try to use a different email address.";
        }
      }

      if (!validateCreatePassword(password)) {
        isValid = false;
        if (password.length < 8) {
          passwordError.textContent =
            "Password must be at least 8 letters long.";
        } else if (!/[A-Z]/.test(password)) {
          passwordError.textContent =
            "Password must contain at least one uppercase letter.";
        } else if (!/[a-z]/.test(password)) {
          passwordError.textContent =
            "Password must contain at least one lowercase letter.";
        } else if (!/\d/.test(password)) {
          passwordError.textContent =
            "Password must contain at least one digit.";
        } else if (!/[@$!%*#?&]/.test(password)) {
          passwordError.textContent =
            "Password must contain at least one special character (@, $, !, %, *, #, ?, &).";
        } else {
          passwordError.textContent = "Invalid password.";
        }
      }
      if (!subscribe) {
        isValid = false;
        alert("You must agree to the terms.");
      }

      if (isValid) {
        const userData = {
          firstName,
          lastName,
          email,
          password,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "http://127.0.0.1:5501/index.html";
      }
    });

  document.getElementById("firstName").addEventListener("input", function () {
    document.getElementById("firstNameError").textContent = "";
  });
  document.getElementById("lastName").addEventListener("input", function () {
    document.getElementById("lastNameError").textContent = "";
  });
  document.getElementById("createEmail").addEventListener("input", function () {
    document.getElementById("createEmailError").textContent = "";
  });
  document
    .getElementById("createPassword")
    .addEventListener("input", function () {
      document.getElementById("createPasswordError").textContent = "";
    });

  function validateFirstName(firstName) {
    return (
      firstName.length >= 2 &&
      firstName.length <= 20 &&
      /^[a-zA-Z]+$/.test(firstName)
    );
  }

  function validateLastName(lastName) {
    return (
      lastName.length >= 2 &&
      lastName.length <= 20 &&
      /^[a-zA-Z]+$/.test(lastName)
    );
  }

  function validateCreateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      email.length >= 8 &&
      email.length <= 20 &&
      re.test(email) &&
      !email.includes(" ")
    );
  }

  function validateCreatePassword(password) {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[@$!%*#?&]/.test(password)
    );
  }
});
document
  .getElementById("submitButtonForAccount")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "http://127.0.0.1:5501/index.html";
  });

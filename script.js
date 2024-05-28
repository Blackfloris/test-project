function addEventHandler() {
  const submitButton = document.getElementById("submitButton");
  const createAccountButton = document.getElementById("btnCreateAccount");
  const linkSignUp = document.getElementById("linkSignUp");
  const checkBox = document.getElementById("subscribe");

  if (submitButton) {
    submitButton.addEventListener("click", handleSignInSubmit);
  }

  if (createAccountButton) {
    createAccountButton.addEventListener("click", handleSubmit);
  }

  if (linkSignUp) {
    linkSignUp.addEventListener("click", function (event) {
      event.preventDefault();
      const form = document.getElementById("loginForm");
      form.style.display = "none";
      window.location.href = "http://127.0.0.1:5500/createAnAccount.html";
    });
  }
  if (checkBox) {
    checkBox.addEventListener("change", function () {
      createAccountButton.disabled = !checkBox.checked;
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName")?.value || "";
  const lastName = document.getElementById("lastName")?.value || "";
  const email = document.getElementById("email")?.value || "";
  const password = document.getElementById("password")?.value || "";

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  if (firstNameError) firstNameError.textContent = "";
  if (lastNameError) lastNameError.textContent = "";
  if (emailError) emailError.textContent = "";
  if (passwordError) passwordError.textContent = "";

  let isValid = true;

  if (!validateName(firstName)) {
    isValid = false;
    if (firstNameError) {
      firstNameError.textContent =
        "First name must be between 2 and 25 characters long and cannot contain special characters (@, $, !, %, *, #, ?, &).";
    }
  }

  if (!validateName(lastName)) {
    isValid = false;
    if (lastNameError) {
      lastNameError.textContent =
        "Last name must be between 2 and 25 characters long and cannot contain special characters (@, $, !, %, *, #, ?, &).";
    }
  }

  if (!validateEmail(email)) {
    isValid = false;
    emailError.textContent =
      "Email must be between 8 and 20 characters long, cannot contain spaces, and must be a valid email address.";
  }

  if (!validatePassword(password)) {
    isValid = false;
    passwordError.textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, #, ?, &).";
  }

  if (isValid) {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
}
function handleSignInSubmit(event) {
  event.preventDefault();
  console.log("ggg");
  const emailSignIn = document.getElementById("emailSignIn")?.value || "";
  const passwordSignIn = document.getElementById("passwordSignIn")?.value || "";
  const emailErrorSignIn = document.getElementById("emailErrorSignIn");
  const passwordErrorSignIn = document.getElementById("passwordErrorSignIn");

  if (emailErrorSignIn) emailErrorSignIn.textContent = "";
  if (passwordErrorSignIn) passwordErrorSignIn.textContent = "";

  let isValid = true;

  if (!validateEmail(emailSignIn)) {
    isValid = false;
    if (emailErrorSignIn) {
      emailErrorSignIn.textContent =
        "Email must be between 8 and 20 characters long, cannot contain spaces, and must be a valid email address.";
    }
  }

  if (!validatePassword(passwordSignIn)) {
    isValid = false;
    if (passwordErrorSignIn) {
      passwordErrorSignIn.textContent =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, #, ?, &).";
    }
  }
  if (isValid) {
    window.location.href = "http://127.0.0.1:5500/createAnAccount.html";
  }
}

document.addEventListener("DOMContentLoaded", addEventHandler);

document.getElementById("firstName")?.addEventListener("input", function () {
  const firstNameError = document.getElementById("firstNameError");
  firstNameError.textContent = "";
});

document.getElementById("lastName")?.addEventListener("input", function () {
  const lastNameError = document.getElementById("lastNameError");
  lastNameError.textContent = "";
});

document.getElementById("email")?.addEventListener("input", function () {
  const emailError = document.getElementById("emailError");
  emailError.textContent = "";
});

document.getElementById("password")?.addEventListener("input", () => {
  const passwordError = document.getElementById("passwordError");
  passwordError.textContent = "";
});
document.getElementById("emailSignIn")?.addEventListener("input", () => {
  const passwordError = document.getElementById("emailErrorSignIn");
  passwordError.textContent = "";
});
document.getElementById("passwordSignIn")?.addEventListener("input", () => {
  const passwordError = document.getElementById("passwordErrorSignIn");
  passwordError.textContent = "";
});

function validateName(name) {
  const hasSpecialChar = !/[@$!%*#?&]/.test(name);
  const isLengthValid = name.length >= 2 && name.length <= 25;
  return hasSpecialChar && isLengthValid;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormatValid = re.test(email) && !email.includes(" ");

  const isLengthValid = email.length >= 8 && email.length <= 20;
  return isLengthValid && isFormatValid;
}

function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  const hasLetter = /[A-Za-z]/.test(password);
  if (!hasLetter) {
    return false;
  }
  const hasDigit = /\d/.test(password);
  if (!hasDigit) {
    return false;
  }
  const hasSpecialChar = /[@$!%*#?&]/.test(password);
  if (!hasSpecialChar) {
    return false;
  }
  const isLengthValid = password.length >= 8;
  return isLengthValid && hasLetter && hasDigit && hasSpecialChar;
}

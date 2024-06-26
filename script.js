document.getElementById("submitButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  if (!validateEmail(email)) {
    isValid = false;
    if (email.length < 8) {
      emailError.textContent = "Email must be at least 8 letters long.";
    } else if (email.length > 20) {
      emailError.textContent = "Email must be no longer than 20 letters";
    } else if (email.includes(" ")) {
      emailError.textContent = "Email cannot contain spaces.";
    } else {
      emailError.textContent =
        "That's not a valid email. Please try to use a different email address.";
    }
  }

  if (!validatePassword(password)) {
    isValid = false;
    if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 letters long.";
    } else if (!/[A-Z]/.test(password)) {
      passwordError.textContent =
        "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      passwordError.textContent =
        "Password must contain at least one lowercase letter.";
    } else if (!/\d/.test(password)) {
      passwordError.textContent = "Password must contain at least one digit.";
    } else if (!/[@$!%*#?&]/.test(password)) {
      passwordError.textContent =
        "Password must contain at least one special character (@, $, !, %, *, #, ?, &).";
    }
  }

  if (isValid) {
    document.getElementById("loginForm").submit();
  }
});

document.getElementById("email").addEventListener("input", function () {
  const emailError = document.getElementById("emailError");
  emailError.textContent = "";
});
document.getElementById("password").addEventListener("input", () => {
  const passwordError = document.getElementById("passwordError");
  passwordError.textContent = "";
});

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

function validateEmail(email) {
  let message = "";

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.length < 8) {
    message = "Email must be at least 8 letters long.";
  } else if (email.length > 20) {
    message = "Email must be no longer than 20 letters";
  } else if (email.includes(" ")) {
    message = "Email cannot contain spaces.";
  } else if (!re.test(email)) {
    message =
      "That's not a valid email. Please try to use a different email address.";
  }
  return message;
}

function validatePassword(password) {
  let message = "";
  if (password.length < 8) {
    message = "Password must be at least 8 letters long.";
  } else if (!/[A-Z]/.test(password)) {
    message = "Password must contain at least one uppercase letter.";
  } else if (!/[a-z]/.test(password)) {
    message = "Password must contain at least one lowercase letter.";
  } else if (!/\d/.test(password)) {
    message = "Password must contain at least one digit.";
  } else if (!/[@$!%*#?&]/.test(password)) {
    message = "Password must contain at least one special character (@, $, !, %, *, #, ?, &).";
  }
  return message
}

function validateFirstName(firstName) {
  let message = ""
  if (firstName.length < 2) {
    message =
      "First name must be at least 2 letters long.";
  } else if (firstName.length > 20) {
    message =
      "First name must be no longer than 20 letters.";
  } else if (/^[a-zA-Z\s'-]+$/.test(firstName)) {
    message = "First name cannot contain symbols.";
  }
  return message
}

function validateLastName(lastName) {
  let message = "";
  if (lastName.length < 2) {
    message =
      "Last name must be at least 2 letters long.";
  } else if (lastName.length > 20) {
   message =
      "Last name must be no longer than 20 letters.";
  } else if (/^[a-zA-Z\s'-]+$/.test(lastName)) {
    message = "Last name cannot contain symbols.";
  }
  return message
}

window.validateEmail = validateEmail;
window.validatePassword = validatePassword;
window.validateFirstName = validateFirstName;
window.validateLastName = validateLastName;

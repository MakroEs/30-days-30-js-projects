const form = document.getElementById("signup-form");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

const passwordStrengthText = document.getElementById("password-strength");
const formMessage = document.getElementById("form-message");

function setError(inputEl, errorEl, message) {
  inputEl.classList.remove("success");
  inputEl.classList.add("error");
  errorEl.textContent = message;
}

function setSuccess(inputEl, errorEl) {
  inputEl.classList.remove("error");
  inputEl.classList.add("success");
  errorEl.textContent = "";
}

function validateUsername() {
  const value = usernameInput.value.trim();

  if (!value) {
    setError(usernameInput, usernameError, "Kullanıcı adı zorunludur.");
    return false;
  }

  if (value.length < 3) {
    setError(usernameInput, usernameError, "En az 3 karakter olmalı.");
    return false;
  }

  setSuccess(usernameInput, usernameError);
  return true;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (!value) {
    setError(emailInput, emailError, "E-posta zorunludur.");
    return false;
  }

  if (!isValidEmail(value)) {
    setError(emailInput, emailError, "Geçerli bir e-posta adresi girin.");
    return false;
  }

  setSuccess(emailInput, emailError);
  return true;
}

function getPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 6) strength++;
  if (password.length >= 10) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
}

function validatePassword() {
  const value = passwordInput.value;

  if (!value) {
    setError(passwordInput, passwordError, "Şifre zorunludur.");
    passwordStrengthText.textContent = "Şifre gücü: -";
    passwordStrengthText.style.color = "#a5b4fc";
    return false;
  }

  if (value.length < 6) {
    setError(passwordInput, passwordError, "Şifre en az 6 karakter olmalı.");
  } else {
    setSuccess(passwordInput, passwordError);
  }

  const strength = getPasswordStrength(value);
  let text = "Şifre gücü: Zayıf";
  let color = "#fca5a5";

  if (strength >= 4) {
    text = "Şifre gücü: Güçlü";
    color = "#4ade80";
  } else if (strength === 3) {
    text = "Şifre gücü: Orta";
    color = "#fde68a";
  }

  passwordStrengthText.textContent = text;
  passwordStrengthText.style.color = color;

  return value.length >= 6;
}

function validateConfirmPassword() {
  const pass = passwordInput.value;
  const confirm = confirmPasswordInput.value;

  if (!confirm) {
    setError(confirmPasswordInput, confirmPasswordError, "Bu alan zorunludur.");
    return false;
  }

  if (pass !== confirm) {
    setError(
      confirmPasswordInput,
      confirmPasswordError,
      "Şifreler eşleşmiyor."
    );
    return false;
  }

  setSuccess(confirmPasswordInput, confirmPasswordError);
  return true;
}

usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword();
});
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    formMessage.style.color = "#4ade80";
    formMessage.textContent = "Form başarıyla doğrulandı ";
  } else {
    formMessage.style.color = "#fca5a5";
    formMessage.textContent = "Lütfen hatalı alanları kontrol edin.";
  }
});

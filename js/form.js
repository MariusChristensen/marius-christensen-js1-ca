const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const submit = document.querySelector("#submit-button");
const successMessage = document.querySelector(".success-message");

function validateForm(event) {
  event.preventDefault();

  let hasErrors = false;

  if (fullName.value.trim().length > 0) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
    hasErrors = true;
  }

  if (subject.value.trim().length >= 10) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    hasErrors = true;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    hasErrors = true;
  }

  if (address.value.trim().length >= 25) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
    hasErrors = true;
  }

  if (hasErrors) {
    successMessage.innerHTML = "";
  } else {
    successMessage.innerHTML = `<h2>Thank you for submitting, ${fullName.value}!</h2>`;
  }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const regEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const emailTest = regEx.test(email);
  return emailTest;
}

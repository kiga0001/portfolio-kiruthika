// Get references to the form
const form = document.getElementById("contactForm");
// Get references to input fields
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetbtn");
const charCounter = document.getElementById("charCounter");
const successMessage = document.getElementById("successMessage");


// Validate Name
function validateName(name) {
    const cleaned = name.trim();
    const regex = /^[a-zA-Z]+$/;
    if (cleaned === "") {
        return false;
    }
    return regex.test(cleaned)
}

// Validate Email
function validateEmail(email) {
    const cleaned = email.trim();
    if (cleaned === "") {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(cleaned)
}

// Validate Message
function validateMessage(message) {
    const cleaned = message.trim();
 
    if (cleaned === "") {
        return false;
    }
 
    return cleaned.length >= 20;
}

// Show Error
function showError(input, messageText) {
    
    input.classList.add("input-error");
    input.classList.remove("input-valid"); 
 
    const field = input.parentElement;
 
    
    let error = field.querySelector(".error-message");
 
    
    if (!error) {
        error = document.createElement("div");
        error.className = "error-message";
        field.appendChild(error); 
    }
 
    error.textContent = messageText;
    error.classList.add("show");
}

 //Clear Error
 
function clearError(input) {
  input.classList.remove("input-error");
 
  const error = input.parentElement.querySelector(".error-message");
  if (error) {
    error.classList.remove("show");
  }
}
 
// Clear Form
 
function clearForm() {
  form.reset();
 
  const fields = form.querySelectorAll("input, select, textarea");
  fields.forEach((field) => {
    field.classList.remove("input-error", "input-valid");
    clearError(field);
  });
}

// Update Character Counter

const MIN_MESSAGE_LENGTH = 20;
function updateCharCounter() {
 
  const len = message.value.length;
  charCounter.textContent = `${len} / ${MIN_MESSAGE_LENGTH} characters`;
 
  if (len >= MIN_MESSAGE_LENGTH) {
    charCounter.classList.add("valid");
  } else {
    charCounter.classList.remove("valid");
  }
}
 
message.addEventListener("input", updateCharCounter);
updateCharCounter();
 
 // Clear button
resetBtn.addEventListener("click", function () {
  clearForm();
  updateCharCounter();

  if (successMessage) {
    successMessage.classList.remove("show");
    successMessage.textContent = "";
  }
});

// Submit form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // First Name
  const firstNameValue = firstName.value.trim();
  if (firstNameValue === "") {
    showError(firstName, "First name is required.");
    isValid = false;
  } else if (!validateName(firstName.value)) {
    showError(firstName, "First name must contain only letters.");
    isValid = false;
  } else {
    clearError(firstName);
    firstName.classList.remove("input-error");
    firstName.classList.add("input-valid");
  }

  // Last Name
  const lastNameValue = lastName.value.trim();
  if (lastNameValue === "") {
    showError(lastName, "Last name is required.");
    isValid = false;
  } else if (!validateName(lastName.value)) {
    showError(lastName, "Last name must contain only letters.");
    isValid = false;
  } else {
    clearError(lastName);
    lastName.classList.remove("input-error");
    lastName.classList.add("input-valid");
  }

  // Email
  const emailValue = email.value.trim();
  if (emailValue === "") {
    showError(email, "Email is required.");
    isValid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(email);
    email.classList.remove("input-error");
    email.classList.add("input-valid");
  }

  // Subject
  if (subject.value === "") {
    showError(subject, "Please select a subject.");
    isValid = false;
  } else {
    clearError(subject);
    subject.classList.remove("input-error");
    subject.classList.add("input-valid");
  }

  // Message
  const messageValue = message.value.trim();
  if (messageValue === "") {
    showError(message, "Message is required.");
    isValid = false;
  } else if (!validateMessage(message.value)) {
    showError(message, "Message must be at least 20 characters.");
    isValid = false;
  } else {
    clearError(message);
    message.classList.remove("input-error");
    message.classList.add("input-valid");
  }

  // Stop if error exists
  if (!isValid) {
    if (successMessage) {
      successMessage.classList.remove("show");
      successMessage.textContent = "";
    }
    return;
  }

  // Success message
  successMessage.textContent = `Thank you ${firstNameValue}! I will contact you soon!`;
  successMessage.classList.add("show");

  setTimeout(function () {
    successMessage.classList.remove("show");
    successMessage.textContent = "";
    clearForm();
    updateCharCounter();
  }, 3000);
});

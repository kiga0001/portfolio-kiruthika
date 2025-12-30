// Get references to all form elements and Store them in variables

// Get references to input fields
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


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
 
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
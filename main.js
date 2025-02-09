document.getElementById('sign-up-form').addEventListener('input', function(event) {
    validateField(event.target);
});

function validateForm() {
    let isValid = true;
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const phone = document.getElementById('phone');
    const dob = document.getElementById('dob');
    
    isValid &= validateField(username);
    isValid &= validateField(email);
    isValid &= validateField(password);
    isValid &= validateField(confirmPassword);
    isValid &= validateField(phone);
    isValid &= validateField(dob);
    
    return !!isValid;  // Ensure it returns a boolean
}

function validateField(field) {
    const errorElement = document.getElementById(field.id + '-error');
    let isValid = true;

    if (field.id === 'confirm-password' && field.value !== document.getElementById('password').value) {
        errorElement.textContent = "Passwords do not match.";
        isValid = false;
    } else if (!field.checkValidity()) {
        isValid = false;
        errorElement.textContent = field.validationMessage;
    } else {
        errorElement.textContent = "";
    }
    
    return isValid;
}


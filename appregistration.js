document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = document.getElementById('error-message');
    
    // Basic validation 

    if (phonenumber.length < 10) {
        errorMessage.textContent = "Phone number must be at least 10 characters long!";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }
    
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long!";
        return;
    }

    // If validation passes
    errorMessage.textContent = "";
    alert("Registration successful for " + username + "!");
    // Perform actual form submission or further processing here
});
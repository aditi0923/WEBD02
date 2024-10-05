document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const email = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    // Simple validation
    if (!email) {
        messageDiv.textContent = 'Please enter your email address.';
        return;
    }

    // Simulate an API call
    fetch('/api/reset-password', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if (response.ok) {
            messageDiv.textContent = 'If this email is registered, a password reset link has been sent.';
        } else {
            messageDiv.textContent = 'An error occurred. Please try again.';
        }
    })
    .catch(error => {
        messageDiv.textContent = 'An error occurred. Please try again later.';
        console.error('Error:', error);
    });
});

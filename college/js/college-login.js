document.getElementById('college-login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const collegeId = document.getElementById('college-id').value;
    const password = document.getElementById('password').value;

    // Here, you would send the data to your backend for verification
    // Assuming an API endpoint exists that verifies college credentials
    fetch('/college-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ collegeId, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/college-dashboard.html'; // Redirect to College Dashboard
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});

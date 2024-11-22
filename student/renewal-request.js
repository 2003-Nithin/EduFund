document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("renewal-form");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent page reload on form submission
        submitRenewalRequest();
    });

    function submitRenewalRequest() {
        // Mocking the submission process
        const courseName = document.getElementById("course-name").value;
        const loanAmount = document.getElementById("loan-amount").value;
        const documentUpload = document.getElementById("document-upload").files[0];

        if (!courseName || !loanAmount) {
            statusMessage.textContent = "Please fill out all required fields.";
            statusMessage.style.color = "red";
            return;
        }

        // For demonstration: Mock API submission
        setTimeout(() => {
            statusMessage.textContent = "Renewal application submitted successfully! You'll be notified once approved.";
            statusMessage.style.color = "green";
        }, 1500);

        // Optionally, here you can send the data to your backend via an API call using fetch or AJAX.
    }
});

function logout() {
    // Logic to log out the user
    window.location.href = "login.html";
}

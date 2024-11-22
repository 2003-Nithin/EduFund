// Handle student login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // Here you can add backend call for validation
    alert(`Logged in as: ${email}`);
  });
  
  // Handle student registration
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('studentEmail').value;
    let password = document.getElementById('studentPassword').value;
    let cgpa = document.getElementById('cgpa').value;
    let backlogs = document.getElementById('backlogs').value;
    // Add validation for CGPA and backlogs
    alert(`Registered: ${email}, CGPA: ${cgpa}, Backlogs: ${backlogs}`);
  });
  
  // Handle loan application
  document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let marksheet = document.getElementById('marksheet').files[0];
    let loanAmount = document.getElementById('loanAmount').value;
    // Here, add logic for document upload and loan processing
    alert(`Loan application submitted for amount: ₹${loanAmount}`);
  });
  
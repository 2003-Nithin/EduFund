// Check Eligibility
function checkEligibility() {
    const cgpa = 7.5;  // Sample CGPA value
    const backlogs = 2; // Sample backlog value
    
    if (cgpa >= 7.5 && backlogs <= 3) {
      // Display eligibility message
      document.getElementById('result').innerHTML = `
          You are eligible for a loan! 
      `  +  <a href="student/eligibility.html">Click here to proceed</a>;
  } 
  else {
      document.getElementById('eligibility-result').innerHTML = 'You are not eligible for a loan.';
    }
  }

  function success()
  {
    document.getElementById('submitclass').innnerHTML="You are applied for the loan";
  }
  
  // EMI Calculator
  function openEmiCalculator() {
    const emiCalculator = `
      <label for="loan-amount">Loan Amount (₹):</label>
      <input type="number" id="loan-amount" placeholder="Enter amount">
      <label for="loan-term">Loan Term (Years):</label>
      <input type="number" id="loan-term" placeholder="Enter years">
      <button onclick="calculateEmi()">Calculate EMI</button>
    `;
    document.getElementById('emi-calculator').innerHTML = emiCalculator;
  }
  
  // EMI Calculation
  function calculateEmi() {
    const loanAmount = document.getElementById('loan-amount').value;
    const loanTerm = document.getElementById('loan-term').value;
    const interestRate = 0.08; // 8% interest rate
    
    if (loanAmount && loanTerm) {
      const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
      document.getElementById('emi-status').innerHTML = `Your EMI is ₹${emi.toFixed(2)} per month.`;
    }
  }
  
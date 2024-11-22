// script.js
document.getElementById("eligibility-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const percentage = parseFloat(document.getElementById("percentage").value);
    const cgpa = parseFloat(document.getElementById("cgpa").value);
    const backlogs = parseInt(document.getElementById("backlogs").value, 10);
    const semester = parseInt(document.getElementById("semester").value, 10);

    // Validate eligibility
    let result = "";

    // Check initial eligibility (Percentage >= 7.5 and CGPA >= 7.5)
    if (percentage < 7.5 || cgpa < 7.5) {
        result = `${name}, you are not eligible. Minimum 7.5% or 7.5 CGPA is required.`;
    } else {
        // Check backlog limits based on the semester
        if (
            (semester === 1 && backlogs > 2) ||
            (semester === 2 && backlogs > 3) ||
            (semester >= 3 && backlogs > 4)
        ) {
            result = `${name}, you are not eligible. Your backlogs exceed the limit for Semester ${semester}.`;
        } else {
            result = `Congratulations ${name}! You are eligible for the loan program.`;
        }
    }

    // Display the result
    document.getElementById("result").innerText = result;
});

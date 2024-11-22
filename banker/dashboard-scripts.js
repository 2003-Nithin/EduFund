document.addEventListener("DOMContentLoaded", () => {
    loadLoanRequests();
    loadRepaymentTracking();
    loadPerformanceMonitoring();
    renderLoanStatusChart();
    renderAnalyticsChart();
    loadNotifications();
});

function loadLoanRequests() {
    const tableBody = document.getElementById("loan-requests");
    const requests = [
        { id: 1, student: "Alice", cgpa: 8.5 },
        { id: 2, student: "Bob", cgpa: 7.8 },
    ];

    requests.forEach((req) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${req.id}</td>
            <td>${req.student}</td>
            <td>${req.cgpa}</td>
            <td>
                <button onclick="approveLoan(${req.id})">Approve</button>
                <button onclick="rejectLoan(${req.id})">Reject</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function loadRepaymentTracking() {
    const tableBody = document.getElementById("repayment-tracking");
    const repayments = [
        { id: 101, status: "Overdue", dueDate: "2024-11-25" },
        { id: 102, status: "Paid", dueDate: "2024-11-20" },
    ];

    repayments.forEach((rep) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${rep.id}</td>
            <td>${rep.status}</td>
            <td>${rep.dueDate}</td>
            <td><button>Notify</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function loadPerformanceMonitoring() {
    const tableBody = document.getElementById("performance-monitoring");
    const students = [
        { name: "Alice", cgpa: 8.5, backlogs: 0 },
        { name: "Bob", cgpa: 7.8, backlogs: 1 },
    ];

    students.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.cgpa}</td>
            <td>${student.backlogs}</td>
        `;
        tableBody.appendChild(row);
    });
}

function loadNotifications() {
    const notificationList = document.getElementById("notifications");
    const notifications = [
        "EMI for Loan ID 101 is overdue.",
        "Loan Application ID 3 is pending verification.",
    ];

    notifications.forEach((note) => {
        const li = document.createElement("li");
        li.textContent = note;
        notificationList.appendChild(li);
    });
}

function renderLoanStatusChart() {
    const ctx = document.getElementById("loan-status-chart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Active", "Completed", "Rejected"],
            datasets: [
                {
                    data: [10, 5, 3],
                    backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
                },
            ],
        },
    });
}

function renderAnalyticsChart() {
    const ctx = document.getElementById("analytics-chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April"],
            datasets: [
                {
                    label: "Loans Disbursed",
                    data: [5, 10, 7, 12],
                    backgroundColor: "#2196f3",
                },
            ],
        },
    });
}

function approveLoan(id) {
    alert(`Loan Application ${id} Approved`);
}

function rejectLoan(id) {
    alert(`Loan Application ${id} Rejected`);
}

function logout() {
    window.location.href = "banker-login.html";
}

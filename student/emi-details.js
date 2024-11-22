document.addEventListener("DOMContentLoaded", () => {
    loadEMISchedule();
    loadPaymentHistory();
});

function loadEMISchedule() {
    const emiSchedule = [
        { dueDate: "2024-11-30", amount: "₹10,000", status: "Paid" },
        { dueDate: "2024-12-30", amount: "₹10,000", status: "Pending" },
        { dueDate: "2025-01-30", amount: "₹10,000", status: "Pending" },
    ];

    const emiTable = document.getElementById("emi-schedule");

    emiSchedule.forEach(emi => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emi.dueDate}</td>
            <td>${emi.amount}</td>
            <td>${emi.status}</td>
            <td><button onclick="viewDetails('${emi.dueDate}')">View Details</button></td>
        `;
        emiTable.appendChild(row);
    });
}

function loadPaymentHistory() {
    const paymentHistory = [
        { paymentDate: "2024-10-30", amount: "₹10,000", status: "Paid" },
        { paymentDate: "2024-09-30", amount: "₹10,000", status: "Paid" },
    ];

    const paymentTable = document.getElementById("payment-history");

    paymentHistory.forEach(payment => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${payment.paymentDate}</td>
            <td>${payment.amount}</td>
            <td>${payment.status}</td>
        `;
        paymentTable.appendChild(row);
    });
}

function makePayment() {
    alert("Redirecting to payment gateway...");
    // Redirect to payment gateway (can integrate PayPal, Stripe, etc.)
}

function viewDetails(dueDate) {
    alert(`Viewing details for EMI due on ${dueDate}`);
}

function logout() {
    window.location.href = "login.html";
}

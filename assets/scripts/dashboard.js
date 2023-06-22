// Retrieve customer info from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const customerName = urlParams.get("firstname");

// Fetch account balance from the backend or set it manually
const accountBalance = "$00.00";

// Update the customer info and account balance on the page
document.getElementById("customer-name").textContent = customerName;
document.getElementById("account-balance").textContent = accountBalance;
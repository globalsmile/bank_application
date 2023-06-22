// Handle form submission
const form = document.getElementById("send-money-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("amount").value;

  // Perform the money transfer logic
  // ...

  // Redirect to a success page or show a success message
  alert(`Successfully sent ${amount} to ${recipient}!`);
  form.reset();
});

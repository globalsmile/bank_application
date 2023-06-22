// Handle form submission
const form = document.getElementById("create-account-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstname").value;

  // Redirect to dashboard page with customer info as parameters in the URL
  const queryParams = new URLSearchParams({
    firstname: firstName,
  });
  window.location.href = "dashboard.html?" + queryParams.toString();
  form.reset();
});

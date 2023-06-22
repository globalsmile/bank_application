// Handle form submission
const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  
  // Perform the login logic
  // ...

  // Redirect to the dashboard page or show an error message
  const loggedIn = true; // Replace with your actual login logic
  if (loggedIn) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
  form.reset();
});

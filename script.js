document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
    return;
  }

  // Placeholder: In real apps, send data to a backend.
  status.textContent = "Thank you for contacting us!";
  status.style.color = "green";

  this.reset();
});

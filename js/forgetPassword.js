document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".auth-form");
  const emailInput = document.getElementById("email");
  const emailHelp = document.getElementById("email-help");
  const successMessage = document.getElementById("success-message");

  // Real-time email validation
  emailInput.addEventListener("blur", function () {
    if (!emailInput.validity.valid) {
      emailHelp.style.display = "block";
      emailInput.setAttribute("aria-invalid", "true");
    } else {
      emailHelp.style.display = "none";
      emailInput.setAttribute("aria-invalid", "false");
    }
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (emailInput.validity.valid) {
      // Show success message
      form.style.display = "none";
      successMessage.style.display = "block";

      // Simulate sending reset email (replace with actual API call)
      console.log("Sending reset email to:", emailInput.value);
    }
  });
});

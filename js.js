document.querySelector(".mobile-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".main-menu").classList.toggle("active");
  });

  document.querySelector(".mobile-menu-btn").addEventListener("click", () => {
  document.querySelector(".main-menu").classList.toggle("active");
  });

// Close menu outside click
document.addEventListener("click", function (event) {
  const menu = document.querySelector(".main-menu");
  const button = document.querySelector(".mobile-menu-btn");
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("active");
  }
});

// Additional JS for animations, form submissions, etc.
// For example, animate on scroll
const elements = document.querySelectorAll(".product-card");
elements.forEach((el) => {
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.opacity = 1;
    el.style.transition = "opacity 0.5s ease";
  }, 500);
});



// Search bar functionality (example)
document.querySelector(".search-bar")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      console.log(`Search for: ${this.value}`);
      // Trigger backend search endpoint (e.g., /products?search=query)
    }
  });

// Basic quantity adjustment (client-side example)
document.querySelectorAll(".quantity-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const action = this.dataset.action;
    const input = this.parentElement.querySelector(".quantity-input");
    let value = parseInt(input.value);
    if (action === "increase") {
      input.value = value + 1;
    } else if (action === "decrease" && value > 1) {
      input.value = value - 1;
    }
    // Trigger update to backend (e.g., via fetch or form submission)
  });
});
// Basic remove item (client-side example)
document.querySelectorAll(".cart-item-remove").forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".cart-item").remove();
    // Trigger update to backend (e.g., via fetch or form submission)
  });
});

// Search bar functionality (example)

// Delete confirmation
document.querySelectorAll(".table-action.delete").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this category?")) {
      console.log(
        "Delete category:",
        this.closest("tr").querySelector("td").textContent
      );
      // Trigger backend delete endpoint (e.g., /category-management/delete/{id})
    }
  });
});

// Show/hide card details based on payment method
document.querySelector("#payment-method")
  .addEventListener("change", function () {
    const cardDetails = document.querySelector("#card-details");
    cardDetails.style.display = this.value === "credit-card" ? "block" : "none";
  });

// Search bar functionality (example)


// Search bar functionality (example)


// Search bar functionality (example)

// FAQ accordion functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Search bar functionality (example)

// Delete confirmation
document.querySelectorAll(".table-action.delete").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this user?")) {
      console.log(
        "Delete user:",
        this.closest("tr").querySelector("td").textContent
      );
      // Trigger backend delete endpoint (e.g., /user-management/delete/{id})
    }
  });
});

// Search bar functionality (example)

// Track order form submission (example)
document.querySelector(".track-order-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const orderId = document.querySelector("#order-id").value;
    console.log(`Tracking order: ${orderId}`);
    // Simulate showing order status (replace with AJAX call to backend)
    document.querySelector(".order-status").style.display = "block";
  });

// Filter and sort (client-side example)
document.querySelector("#category").addEventListener("change", function () {
  console.log(`Filter by category: ${this.value}`);
  // Trigger backend fetch with category filter
});
document.querySelector("#sort").addEventListener("change", function () {
  console.log(`Sort by: ${this.value}`);
  // Trigger backend fetch with sort option
});

// Quantity adjustment
document.querySelectorAll(".quantity-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const action = this.dataset.action;
    const input = this.parentElement.querySelector(".quantity-input");
    let value = parseInt(input.value);
    if (action === "increase") {
      input.value = value + 1;
    } else if (action === "decrease" && value > 1) {
      input.value = value - 1;
    }
    // Trigger update to backend (e.g., via fetch)
  });
});
// Add to cart (example client-side action)
document.querySelector(".add-to-cart-btn")
  .addEventListener("click", function () {
    const quantity = document.querySelector("#quantity").value;
    alert(`Added ${quantity} item(s) to cart!`);
    // Trigger backend POST request to /cart/add
  });


// Search bar functionality (example)
document.querySelector('.search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        console.log(`Search for: ${this.value}`);
        // Trigger backend search endpoint (e.g., /products?search=query)
    }
});
// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
// ==============================================
// TechStore - Consolidated JavaScript
// ==============================================

// ==============================================
// 1. MOBILE MENU TOGGLE
// ==============================================
const initMobileMenu = () => {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mainMenu = document.querySelector('.main-menu');
  const utilityLinks = document.querySelector('.utility-links');
  
  if (menuBtn && mainMenu && utilityLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainMenu.classList.toggle('active');
      utilityLinks.classList.toggle('active');
    });

    // Close menu on outside click
    document.addEventListener('click', (event) => {
      if (!mainMenu.contains(event.target) && !utilityLinks.contains(event.target) && !menuBtn.contains(event.target)) {
        mainMenu.classList.remove('active');
        utilityLinks.classList.remove('active');
      }
    });
  }
};

// ==============================================
// 2. SEARCH BAR FUNCTIONALITY
// ==============================================
const initSearchBar = () => {
  const searchBar = document.querySelector('.search-bar');
  
  if (searchBar) {
    searchBar.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const searchQuery = searchBar.value.trim();
        if (searchQuery) {
          // TODO: Implement actual search functionality
          console.log(`Search for: ${searchQuery}`);
          // Example: window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
        }
      }
    });
  }
};

// ==============================================
// 3. QUANTITY CONTROLS (Cart & Product Detail)
// ==============================================
const initQuantityControls = () => {
  document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
      const action = this.dataset.action;
      const input = this.parentElement.querySelector('.quantity-input');
      
      if (!input) return;
      
      let value = parseInt(input.value) || 1;
      
      if (action === 'increase') {
        input.value = value + 1;
      } else if (action === 'decrease' && value > 1) {
        input.value = value - 1;
      }
      
      // TODO: Update backend
      // updateQuantity(productId, input.value);
    });
  });
};

// ==============================================
// 4. CART ITEM REMOVAL
// ==============================================
const initCartRemoval = () => {
  document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', function() {
      if (confirm('Remove this item from cart?')) {
        const cartItem = this.closest('.cart-item');
        if (cartItem) {
          cartItem.remove();
          // TODO: Update backend and cart count
          // removeFromCart(itemId);
        }
      }
    });
  });
};

// ==============================================
// 5. ADD TO CART
// ==============================================
const initAddToCart = () => {
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
      const quantityInput = document.querySelector('#quantity');
      const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
      
      // TODO: Implement actual add to cart
      alert(`Added ${quantity} item(s) to cart!`);
      
      // Example backend call:
      // addToCart(productId, quantity);
    });
  }
};

// ==============================================
// 6. PAYMENT METHOD TOGGLE
// ==============================================
const initPaymentMethod = () => {
  const paymentMethod = document.querySelector('#payment-method');
  const cardDetails = document.querySelector('#card-details');
  
  if (paymentMethod && cardDetails) {
    paymentMethod.addEventListener('change', function() {
      cardDetails.style.display = this.value === 'credit-card' ? 'block' : 'none';
    });
  }
};

// ==============================================
// 7. FAQ ACCORDION
// ==============================================
const initFAQ = () => {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      
      if (answer && answer.classList.contains('faq-answer')) {
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        
        // Rotate icon if exists
        const icon = question.querySelector('::after');
        question.classList.toggle('active');
      }
    });
  });
};

// ==============================================
// 8. TRACK ORDER FORM
// ==============================================
const initTrackOrder = () => {
  const trackForm = document.querySelector('.track-order-form');
  
  if (trackForm) {
    trackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const orderIdInput = document.querySelector('#order-id');
      const orderId = orderIdInput ? orderIdInput.value.trim() : '';
      
      if (orderId) {
        console.log(`Tracking order: ${orderId}`);
        
        // Show order status section
        const orderStatus = document.querySelector('.order-status');
        if (orderStatus) {
          orderStatus.style.display = 'block';
        }
        
        // TODO: Implement actual API call
        // fetchOrderStatus(orderId);
      }
    });
  }
};

// ==============================================
// 9. PRODUCT FILTERS & SORTING
// ==============================================
const initProductFilters = () => {
  const categoryFilter = document.querySelector('#category');
  const sortFilter = document.querySelector('#sort');
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', function() {
      console.log(`Filter by category: ${this.value}`);
      // TODO: Implement filtering
      // filterProducts({ category: this.value });
    });
  }
  
  if (sortFilter) {
    sortFilter.addEventListener('change', function() {
      console.log(`Sort by: ${this.value}`);
      // TODO: Implement sorting
      // sortProducts(this.value);
    });
  }
};

// ==============================================
// 10. DELETE CONFIRMATIONS
// ==============================================
const initDeleteConfirmations = () => {
  document.querySelectorAll('.table-action.delete').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const entityType = this.closest('.category-table') ? 'category' : 
                        this.closest('.user-table') ? 'user' : 'item';
      
      if (confirm(`Are you sure you want to delete this ${entityType}?`)) {
        const row = this.closest('tr');
        const id = row ? row.querySelector('td')?.textContent : '';
        
        console.log(`Delete ${entityType}: ${id}`);
        
        // TODO: Implement backend deletion
        // deleteEntity(entityType, id);
      }
    });
  });
};

// ==============================================
// 11. FAVORITES MANAGEMENT
// ==============================================
const initFavorites = () => {
  document.querySelectorAll('.remove-favorite').forEach(button => {
    button.addEventListener('click', function() {
      const productId = this.getAttribute('data-product-id');
      const productCard = this.closest('.product-card');
      
      if (productCard) {
        productCard.remove();
        
        // Update favorite count
        const favoriteCount = document.querySelector('.favorite-count');
        if (favoriteCount) {
          const currentCount = parseInt(favoriteCount.textContent) || 0;
          favoriteCount.textContent = Math.max(0, currentCount - 1);
        }
        
        // Check if favorites grid is empty
        const favoritesGrid = document.getElementById('favorites-grid');
        const emptyMessage = document.querySelector('.empty-favorites');
        
        if (favoritesGrid && favoritesGrid.querySelectorAll('.product-card').length === 0) {
          if (emptyMessage) emptyMessage.style.display = 'block';
        }
        
        // TODO: Update backend
        // removeFavorite(productId);
      }
    });
  });
};

// ==============================================
// 12. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ==============================================
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  document.querySelectorAll('.product-card, .testimonial-card, .promotion-card, .account-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
};

// ==============================================
// 13. FORM VALIDATION HELPERS
// ==============================================
const initFormValidation = () => {
  // Add floating label effect on focus
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
  });
};

// ==============================================
// 14. INITIALIZE ALL MODULES
// ==============================================
const init = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
};

const initAll = () => {
  initMobileMenu();
  initSearchBar();
  initQuantityControls();
  initCartRemoval();
  initAddToCart();
  initPaymentMethod();
  initFAQ();
  initTrackOrder();
  initProductFilters();
  initDeleteConfirmations();
  initFavorites();
  initScrollAnimations();
  initFormValidation();
  
  console.log('TechStore initialized successfully!');
};

// Start the application
init();
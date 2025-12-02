
// 1. Product Data Array (No change)
let productsData = [
        { id: 1, title: "Premium Wireless Headphones", price: "239.99", oldPrice: "299.99", stock: "In Stock", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop" },
        { id: 2, title: "Smart Fitness Watch Pro", price: "259.99", oldPrice: "399.99", stock: "In Stock", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop" },
        { id: 3, title: "Designer Sunglasses Collection", price: "152.99", oldPrice: "179.99", stock: "In Stock", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" },
        { id: 4, title: "Premium Sport Sneakers", price: "149.99", oldPrice: "199.99", stock: "Limited Stock", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop" },
        { id: 5, title: "Travel Backpack Deluxe", price: "104.99", oldPrice: "149.99", stock: "In Stock", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop" },
        { id: 6, title: "Smart Speaker with Voice Assistant", price: "77.99", oldPrice: "129.99", stock: "In Stock", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop" },
        { id: 7, title: "Minimalist Analog Watch", price: "49.99", oldPrice: "99.99", stock: "In Stock", image: "https://images.unsplash.com/photo-1542393356263-8cc26e95655a?w=500&h=500&fit=crop" },
        { id: 8, title: "Smart Home Coffee Brewer", price: "224.99", oldPrice: "249.99", stock: "In Stock", image: "https://images.unsplash.com/photo-1543169357-bb0350d5db21?w=500&h=500&fit=crop" }
    ];

const productsGrid = document.getElementById('productsGrid');
const favoritesCountText = document.getElementById('favoritesCountText');
const favoriteCountBadge = document.querySelector('.favorite-count');
const emptyState = document.getElementById('emptyState');
const sectionHeader = document.querySelector('.section-header');

// --- NEW CART VARIABLES AND FUNCTIONS ---

// 1. Initialize Cart Count
// Start with the existing count from the HTML or 0.
let cartCount = parseInt(document.querySelector('.cart-count').textContent) || 0;
const cartCountBadge = document.querySelector('.cart-count');

// 2. Update Cart Count Function
function updateCartCount() {
    cartCountBadge.textContent = cartCount;
    // In a real application, you would also save this to localStorage here.
}

// 3. Handle Add to Cart Click
function addToCart() {
    cartCount++;
    updateCartCount();
    // Optional: Show a confirmation message/toast
    console.log(`Item added! Cart now has ${cartCount} items.`);
}

// ------------------------------------------

// Function to create HTML for a single product card
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <button class="remove-favorite-btn" onclick="removeItem(${product.id})">
                    <i class="fas fa-times"></i>
                </button>
                <span class="stock-badge">${product.stock}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="price-container">
                    <span class="product-price">$${product.price}</span>
                    <span class="old-price">$${product.oldPrice}</span>
                </div>
                <div class="product-actions">
                    <a href="product-detail.html?id=${product.id}" class="view-btn">
                        <i class="fas fa-eye"></i> View
                    </a>
                    <button class="add-cart-btn" data-product-id="${product.id}" onclick="addToCart()">
                        <i class="fas fa-shopping-cart"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to render all products
function renderProducts() {
    let cardsHTML = '';
    productsData.forEach(product => {
        cardsHTML += createProductCard(product);
    });
    productsGrid.innerHTML = cardsHTML;
    
    updateCount();
    checkEmpty();
    // Ensure the initial cart count is displayed correctly
    updateCartCount(); 
}

// Function to remove a single item (No functional change)
function removeItem(idToRemove) {
    const card = document.querySelector(`.product-card[data-id="${idToRemove}"]`);
    
    if (card) {
        productsData = productsData.filter(product => product.id !== idToRemove);

        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            card.remove();
            updateCount();
            checkEmpty();
        }, 300);
    }
}

// Function to clear all items (No functional change)
function clearAll() {
    if (confirm('Are you sure you want to remove all favorites?')) {
        productsData = [];
        
        productsGrid.style.opacity = '0';
        setTimeout(() => {
            productsGrid.innerHTML = '';
            productsGrid.style.opacity = '1';
            updateCount();
            checkEmpty();
        }, 300);
    }
}

// Function to update the favorite count display (No functional change)
function updateCount() {
    const count = productsData.length;
    favoritesCountText.textContent = count;
    favoriteCountBadge.textContent = count;
}

// Function to toggle the empty state (No functional change)
function checkEmpty() {
    if (productsData.length === 0) {
        emptyState.classList.add('active');
        sectionHeader.style.display = 'none';
    } else {
        emptyState.classList.remove('active');
        sectionHeader.style.display = 'flex';
    }
}

// Initial rendering is triggered by the <body> onload attribute

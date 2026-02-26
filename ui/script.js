// Get cart count from localStorage or start at 0
let count = localStorage.getItem("cartCount");
if (!count) {
    count = 0;
}

// Update cart badge if it exists
const badge = document.getElementById("cart-count");
if (badge) {
    badge.textContent = count;
}

// Add to cart functionality
const addBtn = document.getElementById("addBtn");

if (addBtn) {
    addBtn.addEventListener("click", () => {
        count++;
        localStorage.setItem("cartCount", count);

        if (badge) {
            badge.textContent = count;
        }

        const status = document.getElementById("status");
        if (status) {
            status.textContent = "Product added to cart!";
        }
    });
}
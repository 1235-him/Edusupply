const cartContainer = document.getElementById("cart-container");
const totalDisplay = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalDisplay.textContent = `Total: ₦0.00`;
        return;
    }

    cart.forEach(product => {
        total += product.price * product.quantity;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <div class="info">
                <h3>${product.title}</h3>
                <p>₦${product.price}</p>
                <div class="qty">
                    <button onclick="updateQty(${product.id}, -1)">−</button>
                    <span>${product.quantity}</span>
                    <button onclick="updateQty(${product.id}, 1)">+</button>
                </div>
                <button class="remove" onclick="removeItem(${product.id})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    totalDisplay.textContent = `Total: ₦${total.toFixed(2)}`;
}

function updateQty(id, change) {
    const index = cart.findIndex(p => p.id === id);
    if (index !== -1) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}

function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
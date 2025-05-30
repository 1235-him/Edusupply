const product = JSON.parse(localStorage.getItem("details"));
const detailsDiv = document.getElementById("details");

if (product) {
  detailsDiv.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h2>${product.title}</h2>
    <p><strong>Price:</strong> ₦${product.price}</p>
    <p><strong>Brand:</strong> ${product.brand}</p>
    <p><strong>Category:</strong> ${product.category}</p>
    <p>${product.description}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.id === id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} added to cart`);
}
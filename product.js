const container = document.getElementById("product-container");
const searchInput = document.getElementById("search");

function displayProducts(filteredProducts) {
  container.innerHTML = "";
  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card animate";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>₦${product.price}</p>
      <div class="btn-group">
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="viewDetails(${product.id})">View Details</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = products.find(p => p.id === id);
  const existing = cart.find(p => p.id === id);
  if (existing) existing.quantity++;
  else cart.push({ ...item, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.title} added to cart`);
}

function viewDetails(id) {
  localStorage.setItem("details", JSON.stringify(products.find(p => p.id === id)));
  window.location.href = "details.html";
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(term));
  displayProducts(filtered);
});

displayProducts(products);
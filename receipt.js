document.addEventListener("DOMContentLoaded", () => {
  const receipt = JSON.parse(localStorage.getItem("receipt")) || {};

  // Update fields
  document.getElementById("receipt-amount").textContent = `NGN ${Number(receipt.amount || 0).toLocaleString()}`;
  document.getElementById("amount-paid").textContent = `NGN ${Number(receipt.amount || 0).toLocaleString()}`;
  document.getElementById("payment-method").textContent = receipt.paymentType || "-";
  document.getElementById("tx-ref").textContent = receipt.txRef || "-";

  const itemsList = document.getElementById("items-list");
  if (receipt.cartItems && receipt.cartItems.length > 0) {
    receipt.cartItems.forEach(item => {
      const li = document.createElement("li");
      const itemTotal = item.price * item.quantity;
      li.textContent = `${item.title} (x${item.quantity}) - NGN ${itemTotal.toLocaleString()}`;
      itemsList.appendChild(li);
    });
  } else {
    itemsList.innerHTML = "<li>No items found</li>";
  }

  const date = new Date();
  document.getElementById("date").textContent = date.toDateString();
});

const date = new Date();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
document.getElementById("date").textContent = date.toLocaleDateString('en-US', options);

document.querySelector('.download-link').addEventListener('click', (e) => {
  e.preventDefault();
  const element = document.querySelector('.receipt-container');
  const opt = {
    margin: 0.5,
    filename: 'EduSupply_Receipt.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
});
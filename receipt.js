// Fetch cart data from localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Generate a random transaction reference (you can replace this with real one)
const transactionRef = "TXN" + Date.now();

let total = 0;
const itemsList = document.getElementById("items-list");

// Render purchased items
cart.forEach(item => {
  const itemTotal = item.price * item.quantity;
  total += itemTotal;

  const li = document.createElement("li");
  li.textContent = `${item.title} (x${item.quantity}) - NGN ${itemTotal.toLocaleString()}`;
  itemsList.appendChild(li);
});

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

// Update total and other info
document.getElementById("receipt-total").textContent = `NGN ${total.toLocaleString()}`;
document.getElementById("paid-amount").textContent = `NGN ${total.toLocaleString()}`;
document.getElementById("transaction-ref").textContent = transactionRef;

function confirmPayment() {
      const message = encodeURIComponent(
        "Hello, I just made a payment to Edusupply Ltd. For some books pls confirm. THANK YOU"
      );
       const whatsappNumber = "2348085239456";
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`);
    }
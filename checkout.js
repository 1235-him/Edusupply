window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';

  document.querySelector('.checkout-container').classList.add('animate-fade-in');
})

function confirmPayment() {
      const message = encodeURIComponent(
        "Hello, I just made a payment to Edusupply Ltd. For some books pls confirm. THANK YOU"
      );
       const whatsappNumber = "2348085239456";
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`);
    }
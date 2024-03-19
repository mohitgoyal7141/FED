document.addEventListener('DOMContentLoaded', function() {
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.remove();
      updateTotal();
    });
  });

  const confirmButton = document.querySelector('.confirm-btn');
  confirmButton.addEventListener('click', () => {
    updateTotal();
  });

  const checkoutButton = document.querySelector('.checkout-btn');
  checkoutButton.addEventListener('click', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach(item => item.remove());
    alert('Ordered successfully');
  });

  updateTotal();
});

function updateTotal() {
  const prices = Array.from(document.querySelectorAll('.item-details p'))
    .map(p => parseFloat(p.textContent.replace('Price: $', '')));
  const quantities = Array.from(document.querySelectorAll('input[type="number"]'))
    .map(input => parseFloat(input.value));
  const total = prices.reduce((acc, price, index) => acc + price * quantities[index], 0);
  document.querySelector('.total h3').textContent = `Total: $${total.toFixed(2)}`;
}
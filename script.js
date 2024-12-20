const quantities = document.querySelectorAll('.qty-input');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const pricePerItem = 120;

function updateTotal() {
  let subtotal = 0;

  quantities.forEach((input) => {
    const quantity = parseInt(input.value) || 0;
    subtotal += quantity * pricePerItem;
  });

  subtotalElement.textContent = `$${subtotal}`;
  totalElement.textContent = `$${subtotal}`;
}

// Add event listeners to update totals when quantities change
quantities.forEach((input) => {
  input.addEventListener('change', updateTotal);
});

// Initialize totals
updateTotal();

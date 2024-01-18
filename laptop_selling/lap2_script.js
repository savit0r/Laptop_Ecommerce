const buyButtons = document.querySelectorAll('.buy-now');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Thank you for your purchase!');
  });
});

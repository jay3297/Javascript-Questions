const form = document.getElementById('nameForm');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('name').value = '';
  result.textContent = 'Form submitted and cleared!';
});

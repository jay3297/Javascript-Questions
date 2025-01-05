const form = document.getElementById('nameForm');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  result.textContent = `Hello, ${name}!`;
});

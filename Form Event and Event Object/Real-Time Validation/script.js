const input = document.getElementById('name');
const result = document.getElementById('result');

input.addEventListener('input', () => {
  const isValid = /^[a-zA-Z]*$/.test(input.value);
  result.textContent = isValid ? '' : 'Only letters are allowed.';
});

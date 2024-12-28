const button = document.getElementById('myButton');
if (button.getAttribute('disabled') !== null) {
    button.removeAttribute('disabled');
} else {
    button.setAttribute('disabled', '');
}
console.log('Updated disabled attribute:', button.getAttribute('disabled'));

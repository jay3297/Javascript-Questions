const output = document.getElementById('output');

document.addEventListener('keypress', (event) => {
    output.textContent = `You pressed: ${event.key}`;
});

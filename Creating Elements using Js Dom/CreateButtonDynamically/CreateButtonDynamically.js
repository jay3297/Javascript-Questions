document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', () => alert('Button Clicked!'));

    app.appendChild(button);
});

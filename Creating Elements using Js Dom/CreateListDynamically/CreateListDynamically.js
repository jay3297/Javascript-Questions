document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const ul = document.createElement('ul');
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    app.appendChild(ul);
});

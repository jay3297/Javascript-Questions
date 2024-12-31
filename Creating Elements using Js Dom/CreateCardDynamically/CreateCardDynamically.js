document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = "\car.jpeg";
    img.alt = 'Card Image';

    const title = document.createElement('h2');
    title.textContent = 'Hyundai Verna';

    const description = document.createElement('p');
    description.textContent = 'Best sedan car ';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    app.appendChild(card);
});

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const select = document.createElement('select');
    const options = ['B.tech', 'M.tech', 'MBA', 'CA'];

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase().replace(/ /g, '_');
        option.textContent = optionText;
        select.appendChild(option);
    });

    app.appendChild(select);
});

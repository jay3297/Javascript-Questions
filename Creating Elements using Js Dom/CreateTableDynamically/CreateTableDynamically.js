document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const table = document.createElement('table');
    const data = [
        ['Name', 'Age', 'City'],
        ['Jay', '21', 'Vadodara'],
        ['kuldeep', '22', 'vadodara'],
        ['rohit', '23', 'Nagpur']
    ];

    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement(index === 0 ? 'th' : 'td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    app.appendChild(table);
});

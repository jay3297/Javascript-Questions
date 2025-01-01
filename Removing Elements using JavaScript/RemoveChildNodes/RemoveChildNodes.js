document.getElementById('removeChildren').addEventListener('click', () => {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
});

document.getElementById('removeClassElements').addEventListener('click', () => {
    const elements = document.querySelectorAll('.removable');
    elements.forEach(element => element.remove());
});

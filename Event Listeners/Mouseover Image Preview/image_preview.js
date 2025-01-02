const thumbnail = document.getElementById('thumbnail');
const preview = document.getElementById('preview');

thumbnail.addEventListener('mouseover', () => {
    preview.style.display = 'block';
    preview.style.backgroundImage = `url('large_image.jpg')`;
});

thumbnail.addEventListener('mouseout', () => {
    preview.style.display = 'none';
});

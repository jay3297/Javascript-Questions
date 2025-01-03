//Logic
const countElement = document.getElementById('count');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// Initial count
let count = 0;

// Functions for updating the counter
function updateCounter() {
    countElement.textContent = count;
}

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Initialize counter display
updateCounter();

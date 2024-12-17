function countDown(n) {
    console.log("Counting down:", n);
    if (n === 0) return; 
    countDown(n - 1);
}

countDown(5);
function infinite() {
    console.log("Infinite recursion!");
    infinite();
}


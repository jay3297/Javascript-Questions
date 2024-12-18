let count = 0; // Global variable

function increment() {
    count++; // Modifies the global variable
    console.log("Count:", count);
}

increment();
increment();
console.log("Final Count:", count);

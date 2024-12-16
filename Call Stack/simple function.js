//Write a program to demonstrate how the call stack executes functions in the order they are called.
function first() {
    console.log("First function starts");
    second();
    console.log("First function ends");
}

function second() {
    console.log("Second function starts");
    third();
    console.log("Second function ends");
}

function third() {
    console.log("Third function starts and ends");
}

first();

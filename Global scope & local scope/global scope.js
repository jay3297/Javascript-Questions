//Write a program to demonstrate variables in the global scope.
let globalVar = "global variable";

function showGlobal() {
    console.log(globalVar);// Accessible inside the function
}

showGlobal();
console.log(globalVar);


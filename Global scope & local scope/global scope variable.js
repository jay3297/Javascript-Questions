var globalVar = "global variable";

function GlobalVar() {
    console.log(globalVar); // Accessible inside function
}

GlobalVar();
console.log(globalVar); // Accessible outside function
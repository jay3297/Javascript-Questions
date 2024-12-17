function greet() {
    console.log("Hello jay"); 
}

function Goodbye() {
    console.log("Goodbye"); 
    greet(); 
}

function start() {
    console.log("Start!"); 
    Goodbye(); 
}

start();

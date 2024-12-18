//Write a program to demonstrate variables in local scope.
function localScope() {
    let localVar = "local variable"; // Local scope
    console.log(localVar);
}
localScope();
//console.log(localVar); // Error: localVar is not defined.


function outer() {
    console.log("Outer function starts");
    function inner() {
        console.log("Inner function starts");
    }
    inner(); 
    console.log("Outer function ends");
}
outer();

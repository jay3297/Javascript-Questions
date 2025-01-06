function func() {
    let a = 10; // Outer scope variable (block-scoped)
    if (true) {
        let a = 20; // Inner block variable 
        const b = 30; // Inner block variable 
        var c = 40; // Function-scoped variable
        console.log("Inside block: a =", a); // Line A
        console.log("Inside block: b =", b); // Line B
        console.log("Inside block: c =", c); // Line C
    }
    console.log("Outside block: a =", a); // Line D
    // console.log("Outside block: b =", b); // Line E 
    console.log("Outside block: c =", c); // Line F
}
func();

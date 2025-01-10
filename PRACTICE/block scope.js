function innerBlock() {
    if (true) {
        var x = 5;
        let y = 10;
        console.log("inner block: x =", x, "y =", y);
    }

    console.log("Outer block: x =", x);
    console.log("Outer block: y =", y);
}
innerBlock();

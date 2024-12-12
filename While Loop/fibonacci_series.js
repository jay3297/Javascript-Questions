// Write a program for check fibonacci series 
let limit = 10;
let a = 0, b = 1;
let count = 0;
while (count < limit) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++;
}


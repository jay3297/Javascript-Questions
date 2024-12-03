//Write a program to swap the values of two variables without using a third variable.
let a = 5;
let b = 10;
console.log("Before Swap: a =", a,", b =", b);
[a, b] = [b, a];//swap 
console.log("After Swap: a =", a,", b =", b);

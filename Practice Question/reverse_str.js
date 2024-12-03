//write a program for Reverse a string 
function reverseString(str)
{
    return str.split('').reverse().join('');
}
const input1 ="jay dhobi";
const input2 ="kuldeepsinh jahala"
const result = reverseString(input1);
const results = reverseString(input2);
console.log(`Reversed string: ${result}`); 
console.log(`Reversed string: ${results}`);
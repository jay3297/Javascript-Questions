//write a program for palindrome check it is true or not.
function Palindrome(str)
{
    return str === str.split('').reverse().join('');
}

const input ="level";
const newinput ="jay";
const result = Palindrome(input);
const newresults =Palindrome(newinput);
console.log(`${input} is a palindrome Ans: ${result}`);
console.log(`${newinput} is a palindrome Ans : ${newresults}`);
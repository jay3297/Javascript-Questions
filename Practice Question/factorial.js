// writea a program for a factorial of Number.
function factorial(n)
{
    let result = 1; 
    for (let i = 1; i <= n; i++)
        {
        result *= i; 
        }
    return result;
}
const number = 5;
const fact = factorial(number);
console.log(`Factorial of ${number} is: ${fact}`);

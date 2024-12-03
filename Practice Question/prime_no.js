//write a program for prime number 
function Prime(num)
{
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++)
        {
        if (num % i === 0) return false;
        }
    return true;
}
const number = 12;
console.log("prime number", Prime(number)); 


// Function to check if a number is prime
function PrimeNumber(num) {
    let Prime = true;
    if (num < 2) {
        Prime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          Prime = false;
          break;
        }
      }
    }
    console.log(`${num} is ${Prime ? "Prime" : "Not Prime"}`);
  }
    PrimeNumber(22);
  
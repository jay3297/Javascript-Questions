// Step 1: Define the input array
let prices = [200, 150, 300, 100, 250];

// Step 2: Use the reduce method to calculate the total price
let totalPrice = prices.reduce((total, price) => total + price, 0);

// Step 3: Print the output
console.log("Item Prices:", prices);
console.log("Total Price:", totalPrice);

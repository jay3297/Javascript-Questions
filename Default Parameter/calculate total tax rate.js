//Write a function that calculates the total price, including a tax rate. If no tax rate is provided, use a default rate of 5%.
function calculateTotal(price, taxRate = 0.05) {
    return price + price * taxRate;
  }

  console.log(calculateTotal(100));   
  console.log(calculateTotal(520)); 
  
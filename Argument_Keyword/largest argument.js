//Create a function that finds the largest number among the provided arguments.
function findLargest() {
    let largest = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] > largest) {
        largest = arguments[i];
      }
    }
    return largest;
  }
  
  console.log(findLargest(3, 8, 2, 5));  
  console.log(findLargest(7, 5, 0, 12)); 
  
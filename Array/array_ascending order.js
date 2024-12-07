function ascending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  const numbers = [5, 2, 8, 3, 1];
  console.log("Sorted in Ascending Order:",ascending(numbers)); 
  
  
//Write a function that calculates the area of a rectangle. If no height is provided, use the width as the height to calculate the area of a square.
function calculateArea(width, height = width) {
    return width * height;
  }
  
  console.log(calculateArea(5, 10));  
  console.log(calculateArea(7));      
  
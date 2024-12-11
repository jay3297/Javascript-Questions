//Find the number of zeroes present in a 2D array.
let matrix = [
    [0, 2, 3],
    [4, 0, 6],
    [7, 8, 0]
  ];
  
  let Count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        Count++;
      }
    }
  }
  
  console.log("Total number of zeroes:",Count);
  
let arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
  ];
  console.log("Element at row 1, col 2:",arr[0][2]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(`Element at [${i}][${j}]: ${arr[i][j]}`);
    }
  }
  
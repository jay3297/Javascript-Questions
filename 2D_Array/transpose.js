let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let transpose = matrix[0].map((_,colIndex) =>
    matrix.map(row =>row[colIndex])
  );
  console.table(transpose);
  
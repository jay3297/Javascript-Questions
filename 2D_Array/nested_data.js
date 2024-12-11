//print multidimensional array print the nested data 
let employee = [
    ["Jay", "Developer", 18],
    ["kuldeep", "Designer", 22],
    ["rohit", "Manager", 24]
  ];
  employee.forEach((employee, id) => {
    console.log(`Employee ${id + 1}:`);
    console.log(`Name: ${employee[0]}`);
    console.log(`Role: ${employee[1]}`);
    console.log(`Age: ${employee[2]}`);
  });
  
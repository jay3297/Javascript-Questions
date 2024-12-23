//Write a program to merge two objects using the spread operator.
const obj1 = { name: "Jay" };
const obj2 = { age: 21 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

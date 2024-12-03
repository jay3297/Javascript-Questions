//Write a function to check whether a variable is defined or not.

function valid(variable)
{
    return typeof variable !== "undefined";
}
  let x;
  console.log(valid(x)); 
  console.log(valid(42));
  
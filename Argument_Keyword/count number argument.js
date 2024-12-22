//Create a function that returns the count of numeric arguments.
function countArguments() {
    let count = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number") {
        count++;
      }
    }
    return count;
  }
  
  console.log(countArguments(1, "a", 3, "b", 5));
  console.log(countArguments("j", "a", "y"));
  
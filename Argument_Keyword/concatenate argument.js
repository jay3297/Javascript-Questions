//Write a function that concatenates all arguments into a single string.
function concatenateArguments() {
    let result = "";
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  
  console.log(concatenateArguments("jay", " ", "Dhobi"));
  
  
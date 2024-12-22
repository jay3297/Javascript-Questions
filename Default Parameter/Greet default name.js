//Write a function that greets a user. If no name is provided, use "Guest" as the default name.
function greetUser(name = "Guest") {
    return `Hello ${name}`;
  }
  
 
  console.log(greetUser("Jay"));  
  console.log(greetUser());      
  
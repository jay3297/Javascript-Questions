function outer() {
    const outerVariable = "outer scope!";
    function inner() {
      console.log(outerVariable);
    }
    
    inner();
  }
  
  outer();
  
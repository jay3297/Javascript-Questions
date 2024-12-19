//block scope with let 
function BlockScope() {
    let x = 10;
  
    if (true) {
      let x = 20;
      console.log(x);
    }
  
    console.log(x);
  }
  
  BlockScope();
  
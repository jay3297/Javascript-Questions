// Write code to variable scope using var, let, and const.
function variable()
 {
    if (true)
         {
            var x = "var scope"; 
            let y = "let scope"; 
            const z = "const scope";
            console.log(x, y, z); 
        }
    console.log(x);
    //console.log(y); // Error: y is not defined because we use let 
    // console.log(z); // Error: z is not defined because const
  }
  variable();
  
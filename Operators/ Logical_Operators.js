//logicaal operator in javascript.
function eligibility(age) 
{ 
    if (age >= 18 && age <= 60) 
        {
            return "You are eligible to licence.";
        }
    
    if (age < 18 || age > 60)
         {
            return "You are not eligible for licence";
         }
    
    if (!age) 
        {
            return "Please provide a valid age.";
        }
  } 
  console.log(eligibility(20)); 
  console.log(eligibility(65));
  console.log(eligibility(15)); 
  console.log(eligibility(0));  
  console.log(eligibility());   
  
function age_category(age)
 {
    let category = 0;
    if (age >= 0 && age <= 17) category |= 0b0001;
    if (age >= 18 && age <= 59) category |= 0b0010; 
    if (age >= 60) category |= 0b0100; 
  
    
    if (category & 0b0001) return "Child";
    if (category & 0b0010) return "Adult";
    if (category & 0b0100) return "Senior";
  
    return "Invalid age!";
  }
  console.log(age_category(10));  // Output: "Child"
  console.log(age_category(25));  // Output: "Adult"
  console.log(age_category(65));  // Output: "Senior"
  console.log(age_category(-5));  // Output: "Invalid age!"
  
  //in this we write number in form of 8421 
  //like 17 = 168421 =0b0001 in hexa decimal write 10 to 15 as a A to F 
//Check if a year is a leap year.
let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("It's a leap year.");
        } else {
            console.log("It's not a leap year.");
        }
    } else {
        console.log("It's a leap year.");
    }
} else {
    console.log("It's not a leap year.");
}

//Condition for a leap year:
//A year is a leap year if:
//It is divisible by 4 = if (year % 4 === 0)
//and not divisible by 100, = if (year % 100 === 0)
//It is divisible by 400. =  if (year % 400 === 0)

// Validate a password's strength.
let password = "jay1234";

if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[@#$%&*!]/.test(password)) {
    console.log("Your password is strong.");
} else if (password.length >= 6) {
    console.log("Your password is medium strength. Consider adding more characters or symbols.");
} else {
    console.log("Your password is weak. Make it longer and include uppercase letters, numbers, and symbols.");
}


//logic of this program :
//password is more than 8 ,uppercase,lowercase,$,#,@ etc it is consider as a strong .
//or password is 6 then medium 
//then password is less then 6 it is week password length 
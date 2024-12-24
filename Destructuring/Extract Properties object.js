// Write a function to extract name and age properties from a person object.
// Function to extract properties
function extract({ name, age }) {
    return { name, age };
}
const person = { name: "Jay", age: 21, city: "vadodara" };
console.log(extract(person)); 

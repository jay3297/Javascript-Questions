//Write a function to extract city and country from a nested address object.
// Function to extract nested properties
function getAddress({ address: { city, country } }) {
    return { city, country };
}
const user = { address: { city: "vadodara", country: "india" } };
console.log(getAddress(user)); 

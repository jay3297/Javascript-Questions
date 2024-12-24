// Write a function to extract title and price from a deeply nested object.
// Function to extract nested values
function getBookDetails({ book: { details: { title, price } } }) {
    return { title, price };
}

const library = { book: { details: { title: "c++", price: 30 } } };
console.log(getBookDetails(library)); 

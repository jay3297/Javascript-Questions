// Step 1: Define the input array
let marks = [76, 85, 91, 88, 95];

// Step 2: Use the map method to add 5 marks to each score
let updatedMarks = marks.map(mark => (mark + 5 > 100 ? 100 : mark + 5));

// Step 3: Print the output
console.log("Original Marks:", marks);
console.log("Updated Marks:", updatedMarks);

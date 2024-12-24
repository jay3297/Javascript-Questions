//Write a function to destructure properties from two objects and merge them into one.
// Function to merge objects
function mergeObjects(obj1, obj2) {
    const { ...merged } = { ...obj1, ...obj2 };
    return merged;
}
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
console.log(mergeObjects(obj1, obj2));

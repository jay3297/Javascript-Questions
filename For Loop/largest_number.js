// Function to find the largest number in an array
function LargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    console.log("Largest Number:", largest);
  }
    LargestNumber([2, 5, 1, 8, 4]);
  
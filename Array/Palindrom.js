function palindrome(arr) {
    let start = 0;     
    let end = arr.length-1;
  
    while (start<end) {
      if (arr[start] !== arr[end]) {
        return false;
      }
      start++;
      end--;
    }
  
    return true;
  }
  let arr1 = [1, 2, 3, 2, 1];
  let arr2 = [1, 2, 3, 4, 5];
  
  console.log("array is the ", arr1, "palindrome",palindrome(arr1));
  console.log("array is ", arr2, "palindrome",palindrome(arr2)); 
  
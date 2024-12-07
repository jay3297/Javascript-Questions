function sorted(arr)
{
    for (let i = 0;i< arr.length - 1;i++)
         {
            if (arr[i] > arr[i + 1])
                 {
                    return false;
                 }
        }
    return true;
  }
  
  const sortedArray = [1, 2, 3, 4];
  const unsortedArray = [3, 1, 4, 2,5];
  console.log("array is Sorted:", sorted(sortedArray));
  console.log("array is Sorted:", sorted(unsortedArray));
  
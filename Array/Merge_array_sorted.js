function mergearray(arr1, arr2) {
    return [...arr1,...arr2].sort((a,b) => a-b);
  }

  const arr1 = [3, 1, 4];
  const arr2 = [2, 8, 5];
  console.log("array are Merged & sorted:", mergearray(arr1, arr2));
  
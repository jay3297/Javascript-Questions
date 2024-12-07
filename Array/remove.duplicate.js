function duplicates(arr) {
    return [...new Set(arr)];
  }
  const remove_duplicates_arr = [1, 2, 2, 3, 4, 4, 5];
  console.log("remove Duplicates:",duplicates(remove_duplicates_arr));
  
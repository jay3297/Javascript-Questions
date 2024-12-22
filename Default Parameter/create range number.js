//Create a function that generates an array of numbers within a range. The default start value should be 0, and the default step value should be 1.
function createRange(end, start = 0, step = 1) {
    let range = [];
    for (let i = start; i < end; i += step) {
      range.push(i);
    }
    return range;
  }
 
  console.log(createRange(5));       
  
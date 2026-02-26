function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      //recusrion
      let flatItem = flattenArray(item);
      //merging results
      result = result.concat(flatItem);
    } else {
      result.push(item);
    }
  }
  return result;
}

const input = [1, [2, [3, 4], 5], 6];
const flattened = flattenArray(input);
console.log(flattened);

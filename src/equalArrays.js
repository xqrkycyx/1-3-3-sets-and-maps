/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(arr1, arr2) {
  // If the lengths of the arrays are different, they can't be equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Create Maps to store element counts for both arrays
  const countMap1 = new Map();
  const countMap2 = new Map();

  // Populate countMap1 with counts of elements in arr1
  for (const elem of arr1) {
    countMap1.set(elem, (countMap1.get(elem) || 0) + 1);
  }

  // Populate countMap2 with counts of elements in arr2
  for (const elem of arr2) {
    countMap2.set(elem, (countMap2.get(elem) || 0) + 1);
  }

  // Check if countMap1 and countMap2 have the same counts for each element
  for (const [elem, count] of countMap1) {
    if (count !== countMap2.get(elem)) {
      return false;
    }
  }

  // If all elements have the same counts in both arrays, they are equal
  return true;
}

module.exports = isEqual;

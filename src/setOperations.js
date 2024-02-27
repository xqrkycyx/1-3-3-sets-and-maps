/**
 * return the union of two sets
 */
// Function to compute the union of two Sets
function union(setA, setB) {
  // Create a new Set to store the union
  const resultSet = new Set(setA);

  // Add elements from setB to resultSet
  for (const elem of setB) {
    resultSet.add(elem);
  }

  return resultSet;
}

/**
 * return the intersection of two sets
 */
// Function to compute the intersection of two Sets
function intersect(setA, setB) {
  // Create a new Set to store the intersection
  const resultSet = new Set();

  // Iterate through setA and check if each element is in setB
  for (const elem of setA) {
    if (setB.has(elem)) {
      resultSet.add(elem);
    }
  }

  return resultSet;
}

/**
 * return the difference of two sets
 */
// Function to compute the difference of two Sets (elements in setA but not in setB)
function difference(setA, setB) {
  // Create a new Set to store the difference
  const resultSet = new Set();

  // Iterate through setA and add elements not in setB to resultSet
  for (const elem of setA) {
    if (!setB.has(elem)) {
      resultSet.add(elem);
    }
  }

  return resultSet;
}

module.exports = { union, intersect, difference };

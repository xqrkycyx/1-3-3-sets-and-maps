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
function intersect(s1, s2) {}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {}

module.exports = { union, intersect, difference };

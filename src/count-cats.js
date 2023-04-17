const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;

  // Loop over each row in the matrix
  for (let i = 0; i < matrix.length; i++) {
    // Loop over each element in the current row
    for (let j = 0; j < matrix[i].length; j++) {
      // If the current element is a cat ear, increment the counter
      if (matrix[i][j] === '^^') {
        count++;
      }
    }
  }

  // Return the final count of cats found
  return count;
}

module.exports = {
  countCats
};
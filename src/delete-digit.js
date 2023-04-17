const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = String(n);
  let maxNum = Number(numStr.slice(1)); // remove first digit

  // Try removing each digit and compare the resulting number with maxNum
  for (let i = 1; i < numStr.length; i++) {
    const numWithoutDigit = Number(numStr.slice(0, i) + numStr.slice(i+1));
    if (numWithoutDigit > maxNum) {
      maxNum = numWithoutDigit;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};

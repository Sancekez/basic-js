const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const freqMap = new Map();
  let count = 0;
  
  // Populate the frequency map with characters in s1
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    freqMap.set(char, freqMap.has(char) ? freqMap.get(char) + 1 : 1);
  }
  
  // Iterate through each character in s2
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    const freq = freqMap.get(char);
    if (freq) {
      count++;
      freqMap.set(char, freq - 1);
    }
  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};

const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  const result = [];
  let discardPrev = false;
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const prev = arr[i - 1];
    const next = arr[i + 1];

    switch (current) {
      case '--discard-next':
        discardPrev = false;
        i++;
        break;

      case '--discard-prev':
        if (!discardPrev && prev !== undefined) {
          result.pop();
        }
        discardPrev = false;
        break;

      case '--double-next':
        if (next !== undefined) {
          result.push(next);
        }
        discardPrev = false;
        break;

      case '--double-prev':
        if (!discardPrev && prev !== undefined) {
          result.push(prev);
        }
        discardPrev = false;
        break;

      default:
        result.push(current);
        discardPrev = false;
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
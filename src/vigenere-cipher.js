const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageArr = message.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    let result = '';

    for (let i = 0, j = 0; i < messageArr.length; i++) {
      if (/[A-Z]/.test(messageArr[i])) {
        const mIndex = messageArr[i].charCodeAt(0) - 65;
        const kIndex = keyArr[j % keyArr.length].charCodeAt(0) - 65;

        let cipherIndex = this.isDirect ? (mIndex + kIndex) % 26 : (mIndex - kIndex + 26) % 26;
        result += String.fromCharCode(cipherIndex + 65);
        j++;
      } else {
        result += messageArr[i];
      }
    }

    return result;
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageArr = encryptedMessage.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');
    let result = '';

    for (let i = 0, j = 0; i < encryptedMessageArr.length; i++) {
      if (/[A-Z]/.test(encryptedMessageArr[i])) {
        const cIndex = encryptedMessageArr[i].charCodeAt(0) - 65;
        const kIndex = keyArr[j % keyArr.length].charCodeAt(0) - 65;

        let messageIndex = this.isDirect ? (cIndex - kIndex + 26) % 26 : (cIndex + kIndex) % 26;
        result += String.fromCharCode(messageIndex + 65);
        j++;
      } else {
        result += encryptedMessageArr[i];
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};

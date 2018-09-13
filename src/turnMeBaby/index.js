/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
    if(typeof str !== "string")
        return new Error('this is not a string');
    var arr = str.split("");
      return arr.reverse().join("");
  };
export default turnMeBaby;

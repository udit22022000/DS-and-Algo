/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
var letterCombinations = function (digits) {
  //get word
  const word = (num) => {
    if (num == 2) {
      return "abc";
    } else if (num == 3) {
      return "def";
    } else if (num == 4) {
      return "ghi";
    } else if (num == 5) {
      return "jkl";
    } else if (num == 6) {
      return "mno";
    } else if (num == 7) {
      return "pqrs";
    } else if (num == 8) {
      return "tuv";
    } else if (num == 9) {
      return "wxyz";
    }
  };

  //main function
  const phone = (digits) => {
    if (digits.length == 0) {
      return [""];
    }

    let smallAns = phone(digits.slice(1));
    let result = [];
    let alpha = word(digits[0]);
    for (let i = 0; i < alpha.length; i++) {
      for (let j = 0; j < smallAns.length; j++) {
        result.push(alpha[i] + smallAns[j]);
      }
    }
    return result;
  };

  let output = phone(digits);
  if (output.length == 1) {
    return [];
  } else {
    return output;
  }
};

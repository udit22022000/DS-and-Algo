/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var stack = [];
  var top = -1;
  var max = 0;
  var dict = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
      top += 1;
    } else {
      if (top == -1) {
        dict = {};
      } else {
        let val = i - stack.pop() + 1;
        dict[top] = 0;
        top -= 1;
        if (dict[top] == undefined) {
          dict[top] = val;
        } else {
          dict[top] += val;
        }
        max = Math.max(dict[top], max);
      }
    }
  }
  return max;
};

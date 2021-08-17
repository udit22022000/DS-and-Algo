/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  var top = -1;
  for (var i = 0; i < s.length; i++) {
    if ("{([".includes(s[i])) {
      stack.push(s[i]);
      top += 1;
    } else {
      if (top == -1) {
        return false;
      } else {
        if (s[i] == "}" && stack[top] == "{") {
          stack.splice(top, 1);
        } else if (s[i] == ")" && stack[top] == "(") {
          stack.splice(top, 1);
        } else if (s[i] == "]" && stack[top] == "[") {
          stack.splice(top, 1);
        } else {
          return false;
        }
        top -= 1;
      }
    }
  }
  if (top == -1) {
    return true;
  } else {
    return false;
  }
};

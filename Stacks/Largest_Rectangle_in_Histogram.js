/**
 * @param {number[]} heights
 * @return {number}
 */

var smallestRight = function (heights) {
  var stack = [];
  var top = -1;
  var ans = [];
  for (var i = heights.length - 1; i >= 0; i--) {
    if (top == -1) {
      stack.push(i);
      ans.push(heights.length);
      top += 1;
    } else {
      while (true) {
        if (top == -1) {
          ans.push(heights.length);
          stack.push(i);
          top += 1;
          break;
        }
        if (heights[stack[top]] < heights[i]) {
          ans.push(stack[top]);
          stack.push(i);
          top += 1;
          break;
        }
        stack.splice(top, 1);
        top -= 1;
      }
    }
  }
  return ans.reverse();
};

var smallestLeft = function (heights) {
  var stack = [];
  var top = -1;
  var ans = [];
  for (var i = 0; i < heights.length; i++) {
    if (top == -1) {
      ans.push(-1);
      stack.push(i);
      top += 1;
    } else {
      while (true) {
        if (top == -1) {
          ans.push(-1);
          stack.push(i);
          top += 1;
          break;
        }
        if (heights[stack[top]] < heights[i]) {
          ans.push(stack[top]);
          stack.push(i);
          top += 1;
          break;
        }
        stack.splice(top, 1);
        top -= 1;
      }
    }
  }
  return ans;
};

var largestRectangleArea = function (heights) {
  var sR = smallestRight(heights);
  var sL = smallestLeft(heights);
  var res = -1;
  for (var i = 0; i < heights.length; i++) {
    res = Math.max(heights[i] * (sR[i] - sL[i] - 1), res);
  }
  return res;
};

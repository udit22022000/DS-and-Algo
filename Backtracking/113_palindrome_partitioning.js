/**
 * @param {string} s
 * @return {string[][]}
 * https://leetcode.com/problems/palindrome-partitioning/
 */
var partition = function (s) {
  if (s.length == 0) {
    return [[]];
  }

  let result = [];
  for (let i = 1; i <= s.length; i++) {
    let str = s.slice(0, i);
    if (str == str.split("").reverse().join("")) {
      let smallPartition = partition(s.slice(i));
      for (let j = 0; j < smallPartition.length; j++) {
        smallPartition[j].splice(0, 0, str);
        result.push(smallPartition[j]);
      }
    }
  }
  return result;
};

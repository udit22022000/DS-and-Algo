/**
 * @param {number} n
 * @return {string[][]}
 * https://leetcode.com/problems/n-queens/
 */
var solveNQueens = function (n) {
  var solutions = [];

  //creating chess board
  var board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill("."));
  }

  //column check
  const colCheck = (rowNo, colNo) => {
    for (let i = 0; i < n; i++) {
      if (i != rowNo && board[i][colNo] == "Q") {
        return false;
      }
    }
    return true;
  };

  //diagonal check
  const diagCheck = (rowNo, colNo) => {
    //right diag down
    let a = rowNo + 1;
    let b = colNo + 1;
    while (a < n && b < n) {
      if (board[a][b] == "Q") {
        return false;
      }

      a += 1;
      b += 1;
    }

    //right diag up
    a = rowNo - 1;
    b = colNo - 1;
    while (a >= 0 && b >= 0) {
      if (board[a][b] == "Q") {
        return false;
      }

      a -= 1;
      b -= 1;
    }

    //left diag down
    a = rowNo + 1;
    b = colNo - 1;
    while (a < n && b >= 0) {
      if (board[a][b] == "Q") {
        return false;
      }

      a += 1;
      b -= 1;
    }

    //left diag up
    a = rowNo - 1;
    b = colNo + 1;
    while (a >= 0 && b < n) {
      if (board[a][b] == "Q") {
        return false;
      }

      a -= 1;
      b += 1;
    }

    return true;
  };

  const solve = (row) => {
    if (row == n) {
      let ans = [];
      for (let i = 0; i < n; i++) {
        ans.push(board[i].join(""));
      }
      solutions.push(ans);
      return false;
    }

    for (let i = 0; i < n; i++) {
      if (colCheck(row, i) && diagCheck(row, i)) {
        board[row][i] = "Q";
        if (solve(row + 1)) {
          return true;
        } else {
          board[row][i] = ".";
        }
      }
    }

    return false;
  };

  solve(0);
  return solutions;
};

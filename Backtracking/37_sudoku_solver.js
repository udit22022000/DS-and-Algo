/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * https://leetcode.com/problems/sudoku-solver/
 */
var solveSudoku = function (board) {
  //row check
  const rowCheck = (rowNo, num) => {
    for (let i = 0; i < 9; i++) {
      if (board[rowNo][i] == num) {
        return false;
      }
    }
    return true;
  };

  //col check
  const colCheck = (colNo, num) => {
    for (let i = 0; i < 9; i++) {
      if (board[i][colNo] == num) {
        return false;
      }
    }
    return true;
  };

  //box check

  const boxCheck = (rowNo, colNo, num) => {
    let row = Math.floor(rowNo / 3) * 3;
    let col = Math.floor(colNo / 3) * 3;

    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        if (board[i][j] == num) {
          return false;
        }
      }
    }
    return true;
  };

  //sudoku
  const sudoku = (row, col) => {
    if (row == 9) {
      return true;
    }

    if (board[row][col] == ".") {
      for (let i = 1; i <= 9; i++) {
        if (rowCheck(row, i) && colCheck(col, i) && boxCheck(row, col, i)) {
          board[row][col] = String(i);
          if (col == 8) {
            if (sudoku(row + 1, 0)) {
              return true;
            }
          } else {
            if (sudoku(row, col + 1)) {
              return true;
            }
          }
        }
      }

      board[row][col] = ".";
      return false;
    } else {
      if (col == 8) {
        return sudoku(row + 1, 0);
      } else {
        return sudoku(row, col + 1);
      }
    }
  };

  sudoku(0, 0);
};

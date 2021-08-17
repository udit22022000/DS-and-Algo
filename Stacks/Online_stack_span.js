var StockSpanner = function () {
  this.array = [];
  this.length = 0;
  this.stack = [];
  this.top = -1;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.array.push(price);
  this.length += 1;

  if (this.top == -1) {
    this.stack.push(this.length - 1);
    this.top += 1;
    return 1;
  } else {
    while (true) {
      if (this.top == -1) {
        this.stack.push(this.length - 1);
        this.top += 1;
        return this.length;
      }
      if (this.array[this.stack[this.top]] > price) {
        let ans = this.length - 1 - this.stack[this.top];
        this.stack.push(this.length - 1);
        this.top += 1;
        return ans;
      }
      this.stack.splice(this.top, 1);
      this.top -= 1;
    }
  }
};

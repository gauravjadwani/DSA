
var StockSpanner = function() {
    this.stack = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let localSpan = 1
    while((this.stack.length > 0) && (price >= this.stack[this.stack.length-1]['price'])){
        const elm = this.stack.pop()
        localSpan=localSpan + elm['span']
    }
    const obj = {
        price:price,
        span:localSpan
    }
    this.stack.push(obj)
    return localSpan
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var obj = new StockSpanner()
console.log(obj.next(31));
console.log(obj.next(41));
console.log(obj.next(48));
console.log(obj.next(59));
console.log(obj.next(79));
// obj.next(31); // return 1
// obj.next(41);  // return 1
// obj.next(48);  // return 1
// obj.next(59);  // return 2
// console.log(obj.next(79));  // return 1
// obj.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// console.log(obj.next(85));  // return 6
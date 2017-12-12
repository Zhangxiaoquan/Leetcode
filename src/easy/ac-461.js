/**
 * 对于二进制表示的位数而言，通过一次次除以2得到的余数作为位数，从右往左（这是所有的n进制的计算方式）
 * 所以对于该方式直接x y进行每次先取余数，来获取当前位数上的区别，然后再除以二作为下次的输入，边界条件则是
 * x并且y为0
 */

 /**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let result = 0;
  while (x > 0 || y > 0) {
    let leftX = x % 2;
    let leftY = y % 2;
    result += leftX !== leftY % 2 ? 1 : 0;
    x = (x - leftX) / 2;
    y = (y - leftY) / 2;
  }
  return result;
};

module.exports = hammingDistance;
// export default hammingDistance;
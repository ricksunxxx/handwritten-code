/**
 * pop()方法从数组中删除最后一个元素，并返回该元素的值，此方法更改数组的长度
 * https://tc39.es/ecma262/#sec-array.prototype.pop
 * The last element of the array is removed from the array and returned
 */

function pop() {
  /**
   * matches null and undefined
   */
  if (this == null) {
    throw new TypeError("can't convert " + this + ' to object')
  }

  /**
   * http://es5.github.io/#x9.9
   * Undefined/Null： Throw a TypeError exception
   * Boolean/Number/String：Create a new String/Boolean/Number object whose [[PrimitiveValue]] internal property is set to the value of the argument.
   * Object：The result is the input argument (no conversion)
   */
  var self = Object(this)

  /**
   * 无符号右移位运算，转换成无符号32位int类型，确保数组索引为非负整数
   * https://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it
   * It doesn't just convert non-Numbers to Number, it converts them to Numbers that can be expressed as 32-bit unsigned ints.
   * This ensures you've got an integer between 0 and 0xFFFFFFFF.
   */
  var length = self.length >>> 0

  if (length === 0) {
    self.length = 0
    return undefined
  } else {
    var res = self[length - 1]
    self.length = length - 1
    return res
  }
}

// test case
Array.prototype.pop = pop
var test = [1, 2]
var res

res = test.pop()
console.log(test, res) // [1] 2

res = test.pop()
console.log(test, res) // [] 1

res = test.pop()
console.log(test, res) // [] undefined

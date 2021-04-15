/**
 * push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度
 */
function push() {
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
  var i = 0

  while (i < arguments.length) {
    self[length + i] = arguments[i]
    i++
  }
  self.length = length + i

  return length + i
}

// test case
Array.prototype.push = push
var test = [1]
var res = test.push(3, 4, 1, 2)
console.log(test, res) // [ 1, 3, 4, 1, 2 ] 5

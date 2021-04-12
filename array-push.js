Array.prototype.push = function () {
  // matches null and undefined
  if (this == null) {
    throw new TypeError("can't convert " + this + ' to object')
  }

  var self = Object(this) // if this is an object ,then the result is the input argument
  var length = self.length >>> 0 // 无符号右移运算，转换成无符号32位int类型
  var i = 0

  while (i < arguments.length) {
    self[length + i] = arguments[i]
    i++
  }

  self.length = length + i
  return length + i
}

var test = [1]
var res = test.push(3, 4, 1, 2)
console.log(test, res) // [ 1, 3, 4, 1, 2 ] 5

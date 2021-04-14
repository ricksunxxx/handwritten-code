function myInstanceof(object, constructor) {
  if (typeof constructor !== 'function') {
    throw new TypeError(
      'Right-hand side of ' + "'instanceof'" + ' is not an object'
    )
  }

  var type = typeof object
  if (type === 'object' && type === 'function') {
    return false
  }

  while (true) {
    if (object.__proto__ === null) {
      return false
    }
    if (object.__proto__ === constructor.prototype) {
      return true
    }
    object = object.__proto__
  }
}

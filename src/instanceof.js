/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
 * object instanceof constructor
 */
function myInstanceof(obj, constructor) {
  var type = typeof constructor

  // constructor must be an object
  if (type !== 'object' && type !== 'function') {
    throw new TypeError(
      'Right-hand side of ' + "'instanceof'" + ' is not an object'
    )
  }

  // constructor must be callable
  if (type !== 'function') {
    throw new TypeError(
      'Right-hand side of ' + "'instanceof'" + ' is not callable'
    )
  }

  // obj must be an object, but not null
  type = typeof obj
  if ((type !== 'object' && type !== 'function') || obj === null) {
    return false
  }

  while (true) {
    if (obj.__proto__ === null) {
      return false
    }
    if (obj.__proto__ === constructor.prototype) {
      return true
    }
    obj = obj.__proto__
  }
}

//test case
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
var honda = new Car('Honda', 'Accord', 1998)

honda instanceof Car // true
myInstanceof(honda,Car) // true

honda instanceof Function // false
myInstanceof(honda,Function)  // false

honda instanceof Object // true
myInstanceof(honda,Object)  // true

honda instanceof Date // false
myInstanceof(honda,Date) // false

Function instanceof Function // true
myInstanceof(Function,Function) // true

Function instanceof Object // true
myInstanceof(Function,Object) // true

Object instanceof Object // true
myInstanceof(Object,Object) // true

Date instanceof Date // false
myInstanceof(Date,Date) // false

Date instanceof Function // true
myInstanceof(Date,Function) // true

Date instanceof Object // true
myInstanceof(Date,Object) // true

'' instanceof String // false
myInstanceof('',String) // false

[] instanceof [] // Right-hand side of 'instanceof' is not callable
myInstanceof([],[]) // Right-hand side of 'instanceof' is not callable

[] instanceof '' // Right-hand side of 'instanceof' is not an object
myInstanceof([],'') // Right-hand side of 'instanceof' is not an object














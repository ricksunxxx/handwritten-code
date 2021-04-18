/**
 * https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript
 * 1、It creates a new object. The type of this object is simply object.
 * 2、It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).It makes the this variable point to the newly created object.
 * 3、It executes the constructor function, using the newly created object whenever this is mentioned.
 * 4、It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.
 */
function myNew(Fn) {
  var obj = {}
  if (Fn.prototype !== null) {
    obj.__proto__ = Fn.prototype
  }
  var res = Fn.apply(obj, Array.prototype.slice.call(arguments, 1))
  if ((typeof res === 'object' || typeof res === 'function') && res !== null) {
    return res
  }
  return obj
}

//test case
function JapanCar(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
var honda = myNew(JapanCar, 'Honda', 'Accord', 1998)
console.log(honda) // JapanCar {make: "Honda", model: "Accord", year: 1998}

function ChinaCar(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
  return 'China' // attention here
}
var byd = myNew(ChinaCar, 'BYD', '唐', 2021)
console.log(byd) // ChinaCar {make: "BYD", model: "唐", year: 2021}

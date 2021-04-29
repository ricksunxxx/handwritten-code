/**
 * 手写深拷贝方法cloneDeep
 * 深拷贝本质是解决共用内存地址所导致的数据错乱问题
    let obj = {
        a:undefined,
        b:function(){
            console.log('I am function');
        },
        c:NaN,
        d:Symbol('d'),
        e:new Date('2021-4-22'),
        g:Infinity,
        h:new RegExp('aa','g')
    }
    obj[Symbol('f')] = 'Symbol value';
    let anotherObj = JSON.parse(JSON.stringify(obj));
    console.log(obj);
    console.log(anotherObj);
    
 *【用JSON来拷贝的缺点】：
 * 1、无法拷贝function 、Date、RegExp、undefined，Symbol，NaN，Infinity（Symbol会被直接忽略）
 *  1.1 undefined，function，Symbol直接被忽略
 *  1.2 Date转换成日期字符串
 *  1.3 NaN转换成null
 *  1.4 RegExp转换成{}
 *  1.5 Infinity转换成null
 * 2、Object里面不可枚举的属性会被忽略，无法拷贝
 * 3、对象有循环引用,会报错
 * 4、会抛弃对象的constructor,所有的构造函数会指向Object


 * 思路：
 * 1、判断数值的数据类型
 * 2、根据特定数据类型进行具体的拷贝
 *   2.1可遍历类型：遍历每个值递归处理
 *   2.2不可遍历类型：根据类型进行赋值
 *   2.3根据类型，通过constructor构造初始值然后拷贝内容
 * 3、对于引用类型拷贝时，判断是否有循环引用
 * 
 */

// Populate the class2type map（Symbol:ES6 ，BigInt:ES10）
const class2type = {}
'Boolean Number String Function Array Date RegExp Object Error Symbol BigInt'
  .split(' ')
  .forEach((name) => {
    class2type['[object ' + name + ']'] = name.toLowerCase() // 全部小写
  })

// Get the type of object
function getType(obj) {
  // Match null and undefined
  if (obj == null) {
    return obj + ''
  }

  // Reference type
  if (typeof obj === 'object' || typeof obj === 'function') {
    // Support: Android <=2.3 only (functionish RegExp)
    return class2type[Object.prototype.toString.call(obj)] || 'object'
  }

// Primitive type
  return typeof obj 
}

function isObject(obj) {
  return obj !== null && (typeof obj === 'object' || typeof obj === 'function')
}

function cloneDeep(target, map = new WeakMap()) {
  const type = getType(target)

  // Boolean, Number, String, Symbol, BigInt
  if (!isObject(target)) {
    return target
  }

  // Date, RegExp
  if (['date', 'regexp'].includes(type)) {
    return new target.constructor(target)
  }

  // Function
  if ('function' === type) {
  }

  // Array
  if ('array' === type) {
  }

  // Object
  if ('object' === type) {
  }
}

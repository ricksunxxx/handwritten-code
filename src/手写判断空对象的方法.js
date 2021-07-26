/**
 * 手写判断空对象的方法
 *
 * @param {*} obj 入参
 * @returns {Boolean} 是否是空对象
 */

function isEmptyObject(obj) {
  // because Object.keys(new Date()).length === 0, and we have to do some additional check null and undefined check
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}

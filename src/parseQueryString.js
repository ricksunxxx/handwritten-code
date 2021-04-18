/**
 * 把URL参数解析成一个对象并返回
 */

function parseQueryString(url) {
  if (typeof url !== 'string' || url.indexOf('?') === -1) return {} // 无参数

  var queryStr = url
    .replace(/^.*\?/g, '') // 把?及?之前的字符清除
    .replace(/#.*$/g, '') // 把#及#号之后的字符清除
    .replace(/&+/g, '&') // 保证&符号不会连续重复出现
    .replace(/(^&)|(&$)/g, '') // 把前后的&符号清除

  if (!queryStr) return {} // 无参数
  var queryArray = queryStr.split('&') // a=1&b=2 -> ['a=1','b=2']
  var tempArray = [] // 临时数组
  var queryStrObj = {} // 存放URL所有参数的对象
  var i = 0
  for (i = 0; i < queryArray.length; i++) {
    tempArray = queryArray[i].split('=')
    queryStrObj[tempArray[0]] = decodeURIComponent(tempArray[1])
  }

  return queryStrObj
}

// test case
// 输出：{}
console.log(parseQueryString('https://www.baidu.com/newspage.html'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?&'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?&&'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?&&&'))
console.log(parseQueryString('https://www.baidu.com/newspage.html#'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?#12'))

// 输出：{a: "#1", b: "2", c: "3"}
console.log(parseQueryString('https://www.baidu.com/newspage.html?a=%231&&&b=2&&c=3&'))
console.log(parseQueryString('https://www.baidu.com/newspage.html#top?&a=%231&b=2&c=3'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?a=%231&b=2&c=3&'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?a=%231&b=2&c=3&#top'))

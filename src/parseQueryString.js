/**
 * 把URL参数解析成一个对象并返回
 */

function parseQueryString(url) {
  var queryStr = url
    .replace(/^.*\?/g, '') // 把?及?之前的字符清除
    .replace(/#.*$/g, '') // 把#及#号之后的字符清除
    .replace(/&$/g, '') // 把多余的&符号清除

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
// 输出：{a: "#1", b: "2", c: "3"}
console.log(parseQueryString('https://www.baidu.com/newspage.html?a=%231&b=2&c=3'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?a=%231&b=2&c=3&#top'))
console.log(parseQueryString('https://www.baidu.com/newspage.html#top?a=%231&b=2&c=3'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?a=%231&b=2&c=3&'))
console.log(parseQueryString('https://www.baidu.com/newspage.html?a=%231&b=2&c=3&#top'))

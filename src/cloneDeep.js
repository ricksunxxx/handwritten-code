/**
 *
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
 *   可遍历类型(Object/Array/Map/Set等)：遍历每个值递归处理
 *   不可遍历类型： 根据类型进行赋值
 *   根据类型，通过constructor构造初始值然后拷贝内容
 * 3、引用类型，记录拷贝情况，出现循环引用且已经拷贝过的对象，不另外拷贝
 * 
 */

function cloneDeep() {}

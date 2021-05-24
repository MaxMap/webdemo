/**
 * test()检索字符串中指定的值。返回 true 或 false。
 * exec()检索字符串中指定的值。返回找到的值，并确定其位置。
 * compile()改变和重新编译正则表达式
 */

/**
 * 转义字符
 * 如 ： ?  [ ] , + - *
 * 使用反斜杠 \
 */
// console.log(/\?/.test('?')) // true;

/**
 * 字符组
 * [] 范围
 * [^] 范围取反/以外 ^范围第一个字符，不然只是普通字符
 */
//  console.log(/[0,1]/.test('123')); // true
//  console.log(/[0-3]/.test('123')); // true 使用[n-m] =》遵循ASCII表，有顺序排列 如0-9，a-z,A-Z
//  console.log(/[a-zA-Z]/.test('B')); // true
//  console.log(/[0,1]/.test('-1')); // true
// console.log(/[0-9][0-9]/.test('-1'));//false

// console.log(/[^0-9]/.test('1')); // false
// console.log(/[^0-9]/.test('-1')); // false 存在非0-9以外的内容


/**
 * 字符组简写
 * \d [0-9] \D [^0-9]
 * \w [0-9a-zA-Z] \W [^0-9a-zA-Z] 
 * \S [\f\n\r\t...] 空白字符  \S [^\f\n\r\t...]
 */

// console.log(/\d/.test('5')) // true
// console.log('\r')//回车符
// console.log('12345\n123') //换行
// console.log('12345\f123') //换行符
// console.log('12345\t123')//制表符


/**
 * 量词
 * {n} 匹配n次
 * {n,m} 匹配最少n次，最大m次
 * {n,} 匹配n次，最大无限
 * 
 * 简写
 * ? {0,1}
 * * {0,}
 * + {1,}
 */
// console.log(/\d{2}/.test('-09-'));//true 匹配数字连续长度/次数
// console.log(/\d{2}/.test('-0-9-'));//false
// console.log(/\d{2}/.exec('-123456'));//[ '12', index: 1, input: '-123456', groups: undefined ] 表示从1开始匹配，index:索引，input:内容，group:捕获组的信息
// console.log(/\d{2,6}/.exec('-123456'));//123456

// console.log(/d?/.exec('ddd'));
// console.log(/d*/.exec('dd'));
// console.log(/d+/.exec('dddd'));

/**
 * 正则默认贪婪模式：能多就多，在量词后面添加？ 则取最小项
 */
// console.log(/d??/.exec('ddd'));//’‘
// console.log(/d*?/.exec('dd'));//’‘
// console.log(/d+?/.exec('dddd'));//d
// console.log(/d{1,}?/.exec('dddd'));//d


/**
 * 匹配任意字符 .
 * 空白字符是匹配不上的
 */
// console.log(/./.exec('1023'));//1  


/**
 * 分组/子表达式 与 引用/捕获 =》子表达式
 * ()
 */
// 分组
// console.log(/(ab)+/.exec('abab'))//abab
// console.log(/(ab){2}/.exec('ab+ab'))//null

// 2021-5-22
// console.log(/\d{4}-\d{1,2}-\d{1,2}/.exec('2021-5-22'))//2021-5-22
// console.log(/(\d{4})-(\d{1,2})-(\d{1,2})/.exec('2021-5-22'))
// [
//     '2021-5-22',
//     '2021',
//     '5',
//     '22',
//     index: 0,
//     input: '2021-5-22',
//     groups: undefined
//   ]

// console.log(/(\d{4})-(\d{1,2})-(\d{1,2})/.exec('2021-5-22'));
// console.log(RegExp.$0);//undefined 子表达式内容 非标准写法
// console.log(RegExp.$1);//2021
// console.log(RegExp.$2);//5
// console.log(RegExp.$3);//22



/**
 * 反向引用
 */

// console.log(/[a-z]{2}/.exec('abc'))//ab 正向
// console.log(/([a-z])\1/.exec('abc'))//null 方向
// console.log(/([a-z])\1/.exec('aab'))//aa 方向
// console.log(/<([^<>]+)>[\w\W]*<\/\1>/.exec('<h1>123 <span>123</span></h1>'))// 表示([^<>]+)\1 和括号里的表达要一致


/**
 * 非捕获 子表达式不存在
 * ?:
 */
// console.log(/(abc){2}/.exec('abcabc'));//[ 'abcabc', 'abc', index: 0, input: 'abcabc', groups: undefined ]
// console.log(/(?:abc){2}/.exec('abcabc'));//[ 'abcabc', index: 0, input: 'abcabc', groups: undefined ]




/**
 * |    选择或者关系  --分支
 * ||
 * 自左向右匹配，一旦匹配上 就不会头
 */

// console.log(/12|34|56/.exec('1'));//null
// console.log(/12|34|56/.exec('12'));//12
// console.log(/12|34|56/.exec('13445'));//34
// console.log(/[(1-2|6-9)]/.exec('7'));//34

// 0-255
/**
 * \d 0-9
 * [1-9]\d 10-99
 * 1\d\d    100-199
 * 2[0-4]\d 200-249
 * 25[0-5]  250-255
 */

// console.log(/25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d/.exec('256'));// 25 不可取
// console.log(/\b(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\b/.exec('156'));//156 可取
// console.log(/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/.exec('256'));//null


/**
 * 断言
 * \b \B
 * \b 放在边界位置 代表是否存在开头前 或者开头后
 * \B 非单词边界
 * ^ 与 $
 * ^ 边界前
 * $ 边界后
 */

// console.log(/\ban/.test('an '));//true
// console.log(/\ban\b/.test('an '));//true
// console.log(/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/.exec('256'));//null



/**
 * 环视 
 * ?= 紧跟着
 * ?! 不紧跟着
 */

// console.log(/a(?=哈)/.test('a哈哈'))//true a是否紧跟着 '哈哈'
// console.log(/a(?=哈)/.test('123'))//false
// console.log(/a(?!哈)/.test('a123'))//true


/**
 * 匹配模式
 * g global 全局匹配
 * i ignoe case  忽略大小写
 * m multiply 多行匹配
 */
// console.log('123312231'.replace(/123/,'000'));//000312231
// console.log('12331231'.replace(/123/g,'000'));//00030001
console.log(/123$/m.test('hello 123\n145'));//true





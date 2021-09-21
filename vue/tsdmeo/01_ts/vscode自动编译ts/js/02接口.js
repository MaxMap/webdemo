// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
// 方法和属性的描述
/**
 * ?: 可选
 * readonly :只读
 */
(() => {
    // interface Ipserson{
    //     fistName:string,
    //     lastName?:string,
    //     readonly age:number
    // }
    let demo = function (souce, substring) {
        return souce.search(substring) > -1;
    };
    console.log(demo('hhh哈哈', '哈'));
})();

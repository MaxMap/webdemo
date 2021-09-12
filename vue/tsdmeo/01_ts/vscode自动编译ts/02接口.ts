// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
// 方法和属性的描述
/**
 * ?: 可选
 * readonly :只读
 */
(()=>{
    // interface Ipserson{
    //     fistName:string,
    //     lastName?:string,
    //     readonly age:number
    // }

    // function showname(person:Ipserson){
    //     return person.fistName + person.lastName + ',年龄：' +person.age
    // }
    // let per = {
    //     fistName:'平',
    //     // lastName:'多多'
    //     age:18
    // }
    // console.log(showname(per))

    //函数类型：通过接口的方式作为函数使用
    interface ISearchFun{
        (souce:string,substring:string):boolean
    }
    let demo:ISearchFun = function(souce:string,substring:string):boolean{
        return souce.search(substring) > -1
    }
    console.log(demo('hhh哈哈','哈'))
})()
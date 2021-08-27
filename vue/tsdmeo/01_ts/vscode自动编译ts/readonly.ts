/**
 * readonly 修饰符：
 * 是一个关键字，对类中的属性成员进行修饰，修饰以后外部不可随意更改
 * 构造函数中，可以对只读的属性进行修改
 */
(()=>{
    // class Person{
    //     readonly name:string
    //     constructor(name:string){
    //         this.name = name
    //         this.name = '修改'
    //     }
    // }
    // const person:Person = new Person('朱柏忌')
    // console.log(person.name);


    //readonly 添加到否早函数形数中 该类中就有 该属性
    //同时外部函数不会被修改
    //public ,private,protected 放在形参中意思不变
    class Person{
        // constructor(readonly name:string = '2222'){
        //     this.name = name
        // }
        constructor(public name:string = '2222'){
            this.name = name
        }
        // constructor(private name:string = '2222'){
        //     this.name = name
        // }
        // constructor(protected name:string = '2222'){
        //     this.name = name
        // }
    }
    const person:Person = new Person('朱柏忌')
    console.log(person.name);
    
})()
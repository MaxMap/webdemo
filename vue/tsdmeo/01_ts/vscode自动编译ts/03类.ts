(()=>{
    interface Ipserson{
        fistName?:string,
        lastName?:string,
        fullName:string
    }
    class Persion {
        // 定义公共的字段（属性）
        fistName:string //姓氏
        lastName:string //名字
        fullName:string //姓名
        //定义一个构造器函数
        constructor(fistName:string,lastName:string){
            this.fistName = fistName;
            this.lastName = lastName;
            this.fullName = this.fistName + '~' + this.lastName
        }

    }

    function showFullName(person:Ipserson){
        return person.fullName
    }

    const person = new Persion('诸葛','孔明')

    console.log(showFullName(person))

    //类——类型 约束类 的类型,一个类可以被多个接口约束
    interface IFly{
        fly()
    }
    interface ISearch{
        swim()
    }
    //接口可以继承多个接口
    interface IMyname extends IFly,ISearch{
        
    }

    class Hiv implements IFly{
        fly(){
            console.log('111')
        }
    }

    const hiv = new Hiv()
    hiv.fly()

    class Hiv2 implements ISearch,IFly{
        fly(){
            console.log('111')
        }
        swim(){
            console.log('222')
        }
    }











})()
//在定义接口，为接口中的属性和方法定义泛型类型，在使用接口时，在指定具体泛型类型
interface IBaseCRUD<T>{
    data:Array<T>
    add:(t:T)=>T
    getUserId:(id:number) =>T
}

class User{
    id?:number
    name:string
    age:number
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}

class UserCRUD implements IBaseCRUD<User>{ 
    data:Array<User> = []
    //存储数据对象
    add(user:User):User{
        user.id = Date.now() + Math.random()
        this.data.push(user)
        return user
    }
    // 根据id查询用户信息
    getUserId(id:number):User{
        return this.data.find(user => user.id === id)
    }
}

const usercrid:UserCRUD = new UserCRUD()
usercrid.add(new User('詹尼',19))
usercrid.add(new User('鲁西',20))
usercrid.add(new User('提提',15))

console.log(usercrid.data)
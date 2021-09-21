class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class UserCRUD {
    constructor() {
        this.data = [];
    }
    //存储数据对象
    add(user) {
        user.id = Date.now() + Math.random();
        this.data.push(user);
        return user;
    }
    // 根据id查询用户信息
    getUserId(id) {
        return this.data.find(user => user.id === id);
    }
}
const usercrid = new UserCRUD();
usercrid.add(new User('詹尼', 19));
usercrid.add(new User('鲁西', 20));
usercrid.add(new User('提提', 15));
console.log(usercrid.data);

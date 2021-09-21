/**
 * a 继承 b, a为子类 吧为基类
 * 子类 ==》 派生类
 * 基类 --》 超类（父类）
 */
(() => {
    class Person {
        constructor(name = '小米', age = 18, gender = '男') {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHi(str) {
            console.log(`我是${this.name + str}`);
        }
    }
    class Student extends Person {
        constructor(name, age, gender) {
            super(name, age, gender);
        }
    }
    const person = new Person();
    const student = new Student('吴亦凡', 18, '男');
    console.log(student);
    student.sayHi('喜欢渣女');
    /**
     * 多态
     * 父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
     */
    // 定义一个父类
    class Animal {
        constructor(name) {
            this.name = name;
        }
        run(distance = 0) {
            console.log(`距离:${distance}`);
        }
    }
    // 定义一个子类
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance = 5) {
            console.log(`距离:${distance}`);
        }
    }
    // 定义一个子类
    class Pig extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance = 10) {
            console.log(`距离:${distance}`);
        }
    }
    const a = new Animal('动物');
    const b = new Dog('狗子');
    const c = new Pig('荷兰猪');
    a.run();
    b.run();
    c.run();
    //定义父类类型创建子类的对象
    const b2 = new Dog('汪汪');
    const c2 = new Pig('哼哼');
    b2.run(); //5
    c2.run(); //10
    function showRun(demo) {
        demo.run();
    }
    console.log('================');
    showRun(b2);
    showRun(c2);
})();

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * a 继承 b, a为子类 吧为基类
 * 子类 ==》 派生类
 * 基类 --》 超类（父类）
 */
(function () {
    var Person = /** @class */ (function () {
        function Person(name, age, gender) {
            if (name === void 0) { name = '小米'; }
            if (age === void 0) { age = 18; }
            if (gender === void 0) { gender = '男'; }
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        Person.prototype.sayHi = function (str) {
            console.log("\u6211\u662F" + (this.name + str));
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, gender) {
            return _super.call(this, name, age, gender) || this;
        }
        return Student;
    }(Person));
    var person = new Person();
    var student = new Student('吴亦凡', 18, '男');
    console.log(student);
    student.sayHi('喜欢渣女');
    /**
     * 多态
     * 父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
     */
    // 定义一个父类
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log("\u8DDD\u79BB:" + distance);
        };
        return Animal;
    }());
    // 定义一个子类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log("\u8DDD\u79BB:" + distance);
        };
        return Dog;
    }(Animal));
    // 定义一个子类
    var Pig = /** @class */ (function (_super) {
        __extends(Pig, _super);
        function Pig(name) {
            return _super.call(this, name) || this;
        }
        Pig.prototype.run = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log("\u8DDD\u79BB:" + distance);
        };
        return Pig;
    }(Animal));
    var a = new Animal('动物');
    var b = new Dog('狗子');
    var c = new Pig('荷兰猪');
    a.run();
    b.run();
    c.run();
    //定义父类类型创建子类的对象
    var b2 = new Dog('汪汪');
    var c2 = new Pig('哼哼');
    b2.run(); //5
    c2.run(); //10
    function showRun(demo) {
        demo.run();
    }
    console.log('================');
    showRun(b2);
    showRun(c2);
})();

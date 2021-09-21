/**
 * 抽象类：抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
 */
class Animal {
    move() {
        console.log('实例方法');
    }
}
class Sun extends Animal {
    map() {
        console.log('hahaha');
    }
}
let sun = new Sun();
sun.map();
sun.move();

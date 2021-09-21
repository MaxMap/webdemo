(() => {
    class Persion {
        //定义一个构造器函数
        constructor(fistName, lastName) {
            this.fistName = fistName;
            this.lastName = lastName;
            this.fullName = this.fistName + '~' + this.lastName;
        }
    }
    function showFullName(person) {
        return person.fullName;
    }
    const person = new Persion('诸葛', '孔明');
    console.log(showFullName(person));
    class Hiv {
        fly() {
            console.log('111');
        }
    }
    const hiv = new Hiv();
    hiv.fly();
    class Hiv2 {
        fly() {
            console.log('111');
        }
        swim() {
            console.log('222');
        }
    }
})();

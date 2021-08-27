(function () {
    var Persion = /** @class */ (function () {
        //定义一个构造器函数
        function Persion(fistName, lastName) {
            this.fistName = fistName;
            this.lastName = lastName;
            this.fullName = this.fistName + '~' + this.lastName;
        }
        return Persion;
    }());
    function showFullName(person) {
        return person.fullName;
    }
    var person = new Persion('诸葛', '孔明');
    console.log(showFullName(person));
    var Hiv = /** @class */ (function () {
        function Hiv() {
        }
        Hiv.prototype.fly = function () {
            console.log('111');
        };
        return Hiv;
    }());
    var hiv = new Hiv();
    hiv.fly();
    var Hiv2 = /** @class */ (function () {
        function Hiv2() {
        }
        Hiv2.prototype.fly = function () {
            console.log('111');
        };
        Hiv2.prototype.swim = function () {
            console.log('222');
        };
        return Hiv2;
    }());
})();

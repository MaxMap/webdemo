// 类型注解：是一种轻量级的为函数或者变量添加的约束
(() => {
    //  function show(str:string){
    //      return '礼拜：' + str
    //  }
    //  let msg = '睡觉';
    //  console.log(show(msg))
    let num = undefined;
    let num2 = null;
    // 枚举： 
    let Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 100] = "green";
        Color[Color["blue"] = 101] = "blue";
    })(Color || (Color = {}));
    let color = Color.red; //0
    //联合类型
    /**
     * 表示取值可以是多种类型的一种
     */
    function getstr(str) {
        return str.toString();
    }
    getstr(123456);
})();

// 类型注解：是一种轻量级的为函数或者变量添加的约束
(()=>{
    //  function show(str:string){
    //      return '礼拜：' + str
    //  }
    //  let msg = '睡觉';
    //  console.log(show(msg))
    let num:number = undefined;
    let num2:number = null;
    // 枚举： 
    enum Color {
        red,
        green = 100,
        blue
    }
    let color:Color = Color.red//0

    //联合类型
    /**
     * 表示取值可以是多种类型的一种
     */
    function getstr(str:string|number):string {
        return str.toString()
    }
    getstr(123456)
})()
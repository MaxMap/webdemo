import React from 'react';
import propsType from 'prop-types'
// import propst
/**
 * props render 模式
 * 子组件只写逻辑达到复用效果，父组件调用子组件方法
 */
export class RendDom extends React.Component {
  state = {
    name:'张三',
    age:'18'
  }

  render(){
    return this.props.children(this.state)
  }

  // render(){
  //   return (<div>123</div>)
  // }
}
//添加规则
RendDom.propsType = {
  children:propsType.func.isRequired
}

export default class App extends React.Component { 

  render() {

    return (
      <div>
        <RendDom>
          {data =>{
            return (
              <div>
                <p>姓名：{data.name}</p>
                <p>年龄：{data.age}</p>
              </div>
            )
          }}
        </RendDom>
      </div>

    )
  }


  
}

// export default App;

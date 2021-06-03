import React from 'react';
import Demo1 from './propsReact/demo1'
import Demo2 from './propsReact/demo2'
import Demo3 from './propsReact/demo3'
/**
 * props 传值
 * 父传子
 * 子传父
 * 兄弟组件
 * 
 * 子传父
 * 父组件需要回调函数用来接收数据
 * 将该函数作为属性的值传递给子组件
 * 
 * 兄弟组件
 * 变量提升 放到父组件中
 * 1.提供共享状态 和方法
 * 
 */
class App extends React.Component {
  state = {
    name:'比亚迪',
    parentMsg:'',
    num:0
  }

  getChildMsg = (msg) =>{
    console.log('接收子组件的值', msg)
    this.setState({
      parentMsg:msg
    })
  }

  setChildNum = (msg) =>{
    this.setState({
      num:msg
    })
  }

  render() {
    return (
      <div>
        <Demo1 name
        getmsg = {this.getChildMsg}
        fns={()=>console.log('我是函数')}
        tag={<p>我是标签</p>}
          
        ></Demo1>
        <div>
          子传父值：{this.state.parentMsg}
        </div>
        <hr />
        <p>计算相加</p>
        <Demo2 num={this.state.num}></Demo2>
        <Demo3 num={this.state.num} setNum={this.setChildNum}></Demo3>
      </div>
    )
  }
}

export default App;

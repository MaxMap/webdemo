import React from 'react';
/**
 * 组件优化 React.PureComponent纯组件
 * 与shoudComponentUpdate效果一样，自动识别和更新数据
 * 注意：state或props 属性值为引用类型，应创建新数据，不要直接修改原数据
 * 如果是数组，不要使用push,unshift ,应该使用concat,slice ,...
 * 
 * render 调用并不代表浏览器重新渲染
 * 虚拟Dom =>state + Jsx
 */
class Child extends React.PureComponent {

  render () {
    console.log('子组件渲染')
    return (
      <div>子组件{this.props.num}</div>
    )
  }
}
export default class App extends React.Component { 
  state = {
    obj:{num:0}
  }
  addnum = ()=>{
    const newObj = {...this.state,num:Math.floor(Math.random() * 3)}
    this.setState((state,props) => {
      return {
        obj:newObj
      }
    })
  }
  render() {

    return (
      <div>
        <Child num={this.state.obj.num} />
        {/* <p>{this.state.num}</p> */}
        <button onClick={this.addnum}>+1</button>
      </div>

    )
  }

  
}

// export default App;

import React from 'react';
/**
 * 组件优化
 * 组件更新时，子组件也会更新，避免更新，子组件调用钩子函数shouldComponentUpdate()
 * 作用：通过返回值决定是否重新渲染，true 为重新渲染，false反之
 * 触发时机：更新阶段钩子函数，组件重新渲染前执行
 */
class Child extends React.Component {
  //渲染执行之前被调用 钩子函数 第一次渲染除外
  shouldComponentUpdate(nextProps,nextstate){
    /**
     * nextProps 最新 props
     * nextstate 最新 state
     */
    console.log(nextProps,nextstate,this.props);
    if(JSON.stringify(nextProps) === "{}"){
      return false
    }else{
      return true
    }
  }

  render () {
    console.log('子组件渲染')
    return (
      <div>子组件</div>
    )
  }
}
export default class App extends React.Component { 
  state = {
    num:0
  }
  addnum = ()=>{
    this.setState((state,props) => {
      return {
        num:state.num +1
      }
    })
  }
  render() {

    return (
      <div>
        <Child/>
        <p>{this.state.num}</p>
        <button onClick={this.addnum}>+1</button>
      </div>

    )
  }

  
}

// export default App;

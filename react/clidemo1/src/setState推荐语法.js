import React from 'react';
/**
 * 推荐语法
 *  this.setState((state,props) => {},()=>{}) state 最新数据 props最新props, 第二个参数是回调函数
 *  this.setState本身是异步，但是可以同时调用后面的调用会获取最新的参数
 *  this.setState({}) 这个语法获取不到最新的值
 */
export default class App extends React.Component { 
  state = {
    num:0
  }
  addnum = ()=>{
    //不推荐
    // this.setState({
    //   num:this.state.num +1
    // })
    // 推荐
    // this.setState((state,props) => {
    //   return {
    //     num:state.num +1
    //   }
    // })
    // this.setState((state,props) => {
    //   return {
    //     num:state.num +1
    //   }
    // })
    this.setState((state,props) => {
      return {
        num:state.num +1
      }
    },()=>{
      console.log('状态更新后，并且重新渲染后立即执行')
    })
  }
  render() {

    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.addnum}>+1</button>
      </div>

    )
  }

  componentDidUpdate(){
    console.log('生命周期--更新完成')
  }

  
}

// export default App;

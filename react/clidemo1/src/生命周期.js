import React from 'react';
import Demo2 from './propsReact/demo2'
import Demo3 from './propsReact/demo3'
/**
 * 生命周期
 * ++ 挂载 ++ 
 * constructor 构造
 * static getDerivedStateFromProps(nextProps, prevState)
 * render 渲染
 * componentDidMount 挂载
 * ++ 更新 ++
 * static getDerivedStateFromProps(nextProps, prevState) 不常用
 * render (触发条件：this.props,this.setState,this.forceUpdate())
 * getSnapshotBeforeUpdate() 不常用
 * componentDidUpdate 更新结束
 * ++ 卸载 ++
 * componentWillUnmount
 */

export default class App extends React.Component {
  constructor(props){
    super(props)
    console.warn('--constructor--');
    this.state = {
      num: 0
    }
  }
  

  // static getDerivedStateFromProps(props, state) {
  //   // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容
  //   console.warn('--getDeverivedStateFromProps--');
  //   // console.warn(props, state);
  // }

  setChildNum = (msg) =>{
    this.setState({
      num:msg
    })
  }
  

  render() {
    console.warn('--render--');

    return (
      <div>
          {this.state.num <= 2 ? (<Demo2 num={this.state.num} ></Demo2>) : '大于2组件消失了'}
          <Demo3 num={this.state.num} setNumParent={this.setChildNum}></Demo3>
        </div>

    )
  }
  componentDidMount(){
    console.warn('--componentDidMount--');
  }


  
}

// export default App;

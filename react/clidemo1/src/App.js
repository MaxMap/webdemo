import './App.css';
import React from 'react';
/* const arr = [
  { id: 1, name: '显示得分1' },
  { id: 2, name: '显示得分2' },
  { id: 3, name: '显示得分3' },
] */
/* 函数组件 （无状态组件）
function App() {
  return (
    <div className="App">
      <h1 style={{color:'#666',fontSize:'24px'}}>react 首页</h1>
      {arr.map(item=>
          <li key={item.id}>
            学号：{item.id} 姓名：{item.name}
          </li>
        )}
    </div>
  );
} */


// 类组件（有状态组件）
/* class App extends React.Component {
  btnClick(name) {
    alert('事件触发')
  }
  render() {
    return (
      <div className="App">
        <h1 style={{ color: '#666', fontSize: '24px' }}>react 首页</h1>
        {arr.map(item =>
          <li key={item.id} onClick={this.btnClick}>
            学号：{item.id} 姓名：{item.name}
          </li>
        )}
      </div>
    )
  }
} */


/**
 * state 基本用法
 */
// class App extends React.Component {
//   // 第一种
//   /* constructor(props) {
//     super();

//     this.state = {
//       count:0
//     }
//   } */

//   // 第二种 简化
//   state = {
//     count:0
//   }

//   // this指向
//   // this bind方法
//  /*  constructor(props) {
//     super()
//     this.addCont = this.addCont.bind(this)
//   }
//  */
// // calss 实例方法
//   addCont = () => {
//     this.setState({count:this.state.count+1})
//   }
//   // 事件处理
//   // addCont(){
//   //   this.setState({count:this.state.count+1})
//   // }



//   render() {
//     return (
//       <div>
//         <div>计数器: {this.state.count}</div>
//         {/* 箭头中的this 指向外部环境，此处为render() */}
//         {/* <button onClick={()=>this.addCont()}>+1</button> */}
//         <button onClick={this.addCont}>+1</button>
//       </div>
//     )
//   }
// }

// from 表单
/**
 * 受控组件：其值受到React控制表单元素
 */
class App extends React.Component {
  state = {
    txt:''
  }

  handleChange = (e) => {
    this.setState({
      txt:e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.txt} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default App;

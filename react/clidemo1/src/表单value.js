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
    txt:'',
    content:'',
    city:'sz',
    isChecked:false
  }

  handleChange = (e) => {
    this.setState({
      txt:e.target.value
    })
  }
  handleContent = (e) => {
    this.setState({
      content:e.target.value
    })
  }
  handleCity = (e) =>{
    this.setState({
      city:e.target.value
    })
  }

  handleChecked = (e) =>{
    this.setState({
      isChecked:e.target.checked
    })
  }
  render() {
    return (
      <div>
        <label>文本框：<input type="text" value={this.state.txt} onChange={this.handleChange}/></label>
        <label>富文本框：<textarea value={this.state.content} onChange = {this.handleContent}></textarea></label>
        <label>
          下拉框
          <select value = {this.state.city} onChange = { this.handleCity}>
            <option value="sh">上海</option>
            <option value="sz">苏州</option>
            <option value="nj">南京</option>
          </select>
        </label>
        <label>复选框 <input type="checkbox" checked={this.state.isChecked}  onChange = { this.handleChecked}/></label>
      </div>
    )
  }
}

export default App;

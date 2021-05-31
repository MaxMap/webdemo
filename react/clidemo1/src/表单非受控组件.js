import './App.css';
import React from 'react';

/**
 * 表单处理 
 * 非受控组件(不推荐)
 */
class App extends React.Component {
  constructor() {
    super()

    // 创建ref
    this.txtRef = React.createRef()
  }
  getTxt = ()=>{
    console.log(this.txtRef.current.value)
  }
  render() {
    return (
      <div>
        <div>
          <input ref={this.txtRef} />
          <button onClick = {this.getTxt}>获取内容</button>
        </div>
      </div>
    )
  }
}

export default App;

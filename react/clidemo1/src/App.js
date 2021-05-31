import React from 'react';
import Demo1 from './propsReact/demo1'
/**
 * props 传值
 * 父传子
 * 子传父
 * 兄弟组件
 */
class App extends React.Component {
  state = {
    name:'比亚迪'
  }
  render() {
    return (
      <div>
        <Demo1 name
        fns={()=>console.log('我是函数')}
        tag={<p>我是标签</p>}
          
        ></Demo1>
      </div>
    )
  }
}

export default App;

import React from 'react';
import Demo1 from './propsReact/demo1'
/**
 * context
 * 跨组件使用
 * 
 */
// Provider 提供数据  Consumer消费数据
// export const { Provider, Consumer } = React.createContext
export const {Provider,Consumer} = React.createContext("默认名称");

/**
 * children属性：表示组件的子节点，当组件标签有子节点，props就会有该属性
 * children属性与普通props一样，可以是任意值
 */

export default class App extends React.Component {
  state = {
    name: '比亚迪',
    parentMsg: '',
    num: 0
  }

  render() {
    return (
      <Provider  value={this.state.name}>
        <div>
          <Demo1 name
            getmsg={this.getChildMsg}
            fns={() => console.log('我是函数')}
            tag={<p>我是标签</p>}

          >
            <div style={{color:'red'}} key="1">我是子节点Children</div>
          </Demo1>
        </div>
      </Provider>

    )
  }
}

// export default App;

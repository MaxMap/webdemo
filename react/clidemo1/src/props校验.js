import React from 'react';
import Demo1 from './propsReact/demo1'
/**
 * propps 校验
 * 子组件进行约束
 * 约束规则
 * 1.常见类型array,bool,func,number,object,string,symbol
 * 2.React元素类型 ：element
 * 3.必填项：isRequired
 * 4.特定结构对象：shape({})
 * 详细信息：https://react.docschina.org/docs/typechecking-with-proptypes.html
 */

export default class App extends React.Component {
  state = {
    name: '比亚迪',
    parentMsg: '',
    num: 0
  }

  render() {
    return (
      <div>
         <div style = {{fontSize:'28px',color:'#000'}} >&#9660; </div>
          <Demo1 name
            getmsg={this.getChildMsg}
            fns={() => console.log('我是函数')}
            tag={<p>我是标签</p>}

          >
            <div style={{color:'red'}} key="1">我是子节点Children</div>
          </Demo1>
        </div>

    )
  }
}

// export default App;

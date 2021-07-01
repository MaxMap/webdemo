import React from 'react';
// import propst
/**
 * with 模式 高阶组件
 * 1.创建一个函数，名称约定以with开头
 * 2.指定函数参数，参数该以大写字母开头（作为渲染的组件）
 * 3.在函数内部创建一个类组件，提供复用的状态代码，并返回
 * 4.在该组件中，渲染参数组件，同时将状态props传递给该参数组件
 * 5.调用高阶组件，传入要增强的组件，通过返回值拿到增前后的组件，渲染到页面
 * 
 * 设置displayName
 * 使用高阶组件存在问题：得到俩个组件名称相同
 * 原因：默认情况下，react使用组件名称 作为displayName
 * displayName作用：用于设置调试信息
 */
function withRend(WrappedComponent){
  class RendDom extends React.Component {
    state = {
      name:'张三',
      age:'18'
    }
  
    render(){
      return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
    }
  }
RendDom.displayName =`withRend${getDisplayName(WrappedComponent)}`

  return RendDom
}

function getDisplayName(WrappedComponent){
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

//用来测试高阶组件

const UserFun = props =>{
  return (
    <div>
      <p>姓名：{props.name}</p>
      <p>年龄：{props.age}</p>
      {props.city ? (<p>城市：{props.city}</p>): null}
      
    </div>
  )
}

const GetUserData =  withRend(UserFun)


export default class App extends React.Component { 

  render() {

    return (
      <div>
        <GetUserData city="北京"></GetUserData>
      </div>

    )
  }


  
}

// export default App;

import React from 'react';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
/**
 *  React路由基础
 * yarn add react-router-dom
 * router组件：包裹整个应用，一个React应用只使用一次
 * 
 * 
 * Link组件：用于指定导航链接 类似vue router-link
 * Route组件:指定路由展示组件相关信息
 * + path属性：路由规则
 * + component属性：展示的组件
 * Route组件写在哪，渲染出来的组件就显示在哪里
 */
// 导入页面
import First from './view/first'
export default class App extends React.Component { 
  render() {

    return (
      <Router>
        <div>
         <h1> React路由基础</h1>
          <div><Link to="/first">页面1</Link></div>
          <Route path="/first" component={First}></Route>
        </div>
      </Router>
      

    )
  }

  
}

// export default App;

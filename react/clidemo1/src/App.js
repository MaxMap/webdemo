import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
/**
 *  React路由基础
 * yarn add react-router-dom
 * router组件：包裹整个应用，一个React应用只使用一次
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

import React from 'react';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
/**
 * React编程式导航
 * path="/"  默认路由
 * exact 精准匹配、
 * React路由默认模糊查询
 */
class Login extends React.Component {

  goLink = () => {
    this.props.history.push('./Pc')
  }

  render() {
    return (
      <div>
        <h1>登录页面</h1>
        <button onClick={this.goLink}>登录</button>
      </div>
    )
  }
}

const Pc = (props) => {
  const handleBack = () => {
    props.history.go(-1)
  }
  return (
    <div>
      <h1>后端页面</h1>
      <button onClick={handleBack}>退出</button>
    </div>
  )
}

export default class App extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <h1> React路由基础</h1>
          <div><Link to="/Login">去登陆</Link></div>
          {/* <div><Link to="/Pc">后端页面</Link></div> */}
          <Route exact path="/Login" component={Login}></Route>
        </div>
      </Router>


    )
  }


}

// export default App;

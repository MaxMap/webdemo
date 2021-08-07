import React from 'react';
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
/**
 * React编程式导航
 * path="/"  默认路由
 * exact 精准匹配、
 * React路由默认模糊查询
 */
 const Child = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
const ref = React.createRef();
export default class App extends React.Component {
  componentDidMount(){
    console.log('ref',ref)
    ref.current.style.color='red'
  }
  render() {

    return (
      <div>
        父级页面\r\
        <Child ref={ref}>按钮</Child>
      </div>


    )
  }


}

// export default App;

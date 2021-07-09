import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Nav from './views/Nav/Nav';
import Home from './views/Home/home';
import ClassList from './views/ClassList/ClassList';
import axios from 'axios'
/**
 * 
 * @returns Redirect 重定向 to：路径
 */
 export default class App extends Component {
  
  componentDidMount(){
    axios({
      url:"http://httpbin.org/get",
    }).then(res =>{
      console.log('httpbin数据',res)
    })
  }

  render(){
    return (
      <Router>
        <div className="App">          
            <Nav></Nav>
            <Route exact path="/" render={()=><Redirect to="/home"/>}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/ClassList" component={ClassList}></Route>
        </div>
      </Router>
    )
  }
};

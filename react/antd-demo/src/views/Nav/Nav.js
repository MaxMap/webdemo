import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'
class Nav extends Component {
    render() {
        return (
            <div className="NavMax" id="nav">
                <div><Link to="/home">首页</Link></div>
                <div><Link to="/ClassList">分类列表</Link></div>
            </div>
        );
    }
}

export default Nav;

import React from 'react';
import PropTypes from 'prop-types';
// import Demo4 from './demo4'
/**
 * props 只读不可修改
 * 使用类组件 如果写了构造函数，应该将props 传递给 super(),否则无法在构造函数中获取props
 */



class demo1 extends React.Component {
    constructor(props){
        super(props)
        // console.log(props)
        props.fns()
    }
    state = {
        msg:'读书覅hi'
    }

    handeclink = ()=>{
        this.props.getmsg(this.state.msg)
    }
    render(){
        // console.log(this.props)
        return(
            <div>
                我叫：{this.props.name}
                <div>
                    props.tag:<br/>
                    {this.props.tag}
                </div>
                <button onClick={this.handeclink} >传父</button>
                {this.props.children}
                {/* <Demo4></Demo4> */}
            </div>
        )
    }
}

/**
 * 规则校验
 */
 demo1.propTypes ={
     name:PropTypes.number
 }

export default demo1
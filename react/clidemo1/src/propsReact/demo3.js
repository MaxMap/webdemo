import React from 'react';

class demo3 extends React.Component {

    setNum = () =>{
        let num = this.props.num;
        num += 1
        this.props.setNum(num)
    }

    render(){
        return (
            <button onClick={this.setNum}>+1</button>
        )
    }
}
export default demo3
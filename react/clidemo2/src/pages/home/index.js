import React from 'react';
import store from '../../store';
import { sendAction } from '../../action';

export default class Home extends React.Component {
    handleClink = () =>{
        const action = sendAction()
        // 发送一个action
        store.dispatch(action)
    }
    componentDidMount(){
        //监听
        store.subscribe(()=>{
            console.log(store.getState())
            this.setState({})
        })
    }
    render (){
        return (
            <div>
                <button onClick ={this.handleClink}>调用action</button>
                <div>{store.getState().value}</div>
            </div>
            
        )
    }
}

import React from 'react';
import { Consumer } from '../App.js';
export default class Demo4 extends React.Component {
    render() {
        return (
            <Consumer>
                {(name ) => <p>孙组件。获取传递下来的值:{name}</p>}
            </Consumer>
        )
    }
}
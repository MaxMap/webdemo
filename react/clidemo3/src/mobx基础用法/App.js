// import React, { Component } from 'react';
import { useStore } from '../store/index'
import { observer } from 'mobx-react-lite'
// observer 包裹class 会报错
function App() {
    const { counterStore } = useStore()
    // console.log('rootStore', rootStore)
    return (<>
        {counterStore.count}
        <button onClick={counterStore.addCount}>+</button>
    </>)
}

export default observer(App);
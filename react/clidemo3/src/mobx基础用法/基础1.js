// import React, { Component } from 'react';
import { counterStore } from '../store/counter.store';
import { observer } from 'mobx-react-lite'
// observer 包裹class 会报错
function App() {
    return (<>
        <p>计算属性：{counterStore.filterList.join('-')}</p>
        <button onClick={counterStore.addCount}>
            {counterStore.count}
        </button>
    </>)
}

export default observer(App);
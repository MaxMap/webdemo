// 组合子模块
import { ListStore } from './list.store'
import { CounterStore } from './counter.store'
import React from 'react'
class RootStore {
    constructor() {
        this.listStore = new ListStore()
        this.counterStore = new CounterStore()
    }
}
// 实例化操作
const rootStore = new RootStore()
// 使用 react  context机制 完成统一方法封装
// Provider value={传递的数据}
// 查找机制 ：useContext 优先从Provider calue查找，没有则向createContext中查找
const context = React.createContext(rootStore)
// 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
// 当前的 context 值由上层组件中距离当前组件最近的 < MyContext.Provider > 的 value prop 决定
const useStore = () => React.useContext(context)

export { useStore }
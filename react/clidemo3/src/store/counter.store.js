import { makeAutoObservable } from 'mobx'
class CounterStore {
    // 定义数据
    count = 1
    list = [1, 2, 3, 4, 5, 6]
    constructor() {
        // 数据转换为响应式
        makeAutoObservable(this)
    }
    get filterList() {
        return this.list.filter(item => item > 2)
    }
    // }定义action方法（修改数据）
    addCount = () => {
        this.count++
    }

}
// 实例化数据 导出给react使用
// const counterStore = new CounterStore()
export { CounterStore }
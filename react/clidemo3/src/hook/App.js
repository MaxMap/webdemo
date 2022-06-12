
import React, { useContext, useState } from 'react';
import Context from './createContext'
function Son() {
  const conut = useContext(Context)
  // render() {
  return (
    <div>
      <p>这是子组件1</p>
      <p>传过来的数据：{conut}</p>
      <Son2></Son2>
    </div>
  )
  // }
}
function Son2() {
  const conut = useContext(Context)
  // render() {
  return (
    <> <p>这是子组件1</p>
      <p>传过来的数据：{conut}</p></>
  )
  // }
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={count}>
      <div>
        <Son ></Son>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
    </Context.Provider>
  )
}

export default App;

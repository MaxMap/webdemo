
import React, { useState } from 'react';

function Counter({ num }) {
  const [count, setCount] = useState(() => {
    // 初始化会得到计算，后面不会
    return num
  })
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}

function App() {
  return (
    <div>
      <Counter num={10}></Counter>
      <Counter num={20}></Counter>
    </div>
  )
}

export default App;

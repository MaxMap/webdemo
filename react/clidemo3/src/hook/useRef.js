
import React, { useEffect, useRef } from 'react';

class Son extends React.Component {
  setName = () => {
    return '111111111111111'
  }
  render() {
    return (
      <> 这是子组件</>
    )
  }
}

function App() {
  const sonRef = useRef(null)
  const h1Ref = useRef(null)
  // useEffect 回调是在dom之后
  useEffect(() => {
    console.log(sonRef.current.setName())
    console.log(h1Ref.current)
  }, [])
  return (
    <div>
      <Son ref={sonRef}></Son>
      <h1 ref={h1Ref}>标题</h1>
    </div>
  )
}

export default App;

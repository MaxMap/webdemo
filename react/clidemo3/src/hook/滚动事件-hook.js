
import React from 'react';
import './App.css';
import useWindowScroll from './useWindowScroll'

function App() {
  const [y] = useWindowScroll()
  return (
    <div style={{ height: '12000px' }}>{y}</div>
  )
}

export default App;

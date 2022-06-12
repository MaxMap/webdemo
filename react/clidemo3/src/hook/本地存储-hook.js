
import React from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage'

function App() {
  const [message, setMessage] = useLocalStorage('hool-key', '小明')
  setTimeout(() => {
    setMessage('茄子')
  }, 3000)
  return (
    <div>
      {message}
    </div>
  )
}

export default App;

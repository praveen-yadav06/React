import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState()

  const handleIncrement = () => {
    setCount(prev => prev++)
  }

  const handleDecrement = () => {
    setCount(prev => prev++)
  }


  return(
    <div>
      hello shubham papa
    </div>
  )
}

export default App

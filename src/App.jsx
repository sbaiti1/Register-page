import { useState } from 'react'
import Form from './form'
import './App.css'
import Home from './home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app1'>
     
      <Home />
    </div> 
     
  )
}

export default App

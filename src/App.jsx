import { useState } from 'react'
import Form from './form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className="aside">
      
      </div>
      <Form />
    </div> 
     
  )
}

export default App

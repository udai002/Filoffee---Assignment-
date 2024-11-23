import { useState } from 'react'

import './App.css'
import Task from './components/Task'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task/>
      {/* adding prompt to delete 
      edit 
      readme */}
    </>
  )
}

export default App

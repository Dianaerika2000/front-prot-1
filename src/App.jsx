import { useState } from 'react'
import './App.css'
import DescriptivePage from './Pages/descriptivePage/DescriptivePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DescriptivePage />
    </div>
  )
}

export default App

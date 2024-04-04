import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DescriptivePage from './Pages/DescriptivePage/DescriptivePage'
import SectionContentPage from './Pages/DescriptivePage/SectionContentPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DescriptivePage/>}/>
          <Route path='/contenido/:id' element={<SectionContentPage/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

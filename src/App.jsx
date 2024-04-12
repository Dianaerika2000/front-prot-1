import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DescriptivePage from './Pages/DescriptivePage/DescriptivePage'
import SectionContentPage from './Pages/DescriptivePage/SectionContentPage'
import ButtonGenerator from './components/Button'
import ButtonCronogramaGenerator from './components/ButtonCronograma'
import { useHashFragment } from "./hook/useHashFragment";

function App() {
  useHashFragment();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DescriptivePage/>}/>
          <Route path='/contenido/:id' element={<SectionContentPage/>}/>
          <Route path='/html' element={<ButtonGenerator/>}/>
          <Route path='/cronograma-html' element={<ButtonCronogramaGenerator/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

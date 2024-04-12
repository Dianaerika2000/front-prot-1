import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DescriptivePage from './Pages/DescriptivePage/DescriptivePage'
import ButtonCronogramaGenerator from './components/ButtonCronograma'
import Navbar from './components/layout/NavBar'
import HomePage from './Pages/HomePage'
import DatePeriodPage from './Pages/DatePeriodPage/DatePeriodPage'
import { useHashFragment } from "./hook/useHashFragment";
import SectionContentPage from './Pages/DescriptivePage/SectionContentPage'

function App() {
  useHashFragment();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/contenido/:id' element={<SectionContentPage/>}/>
          <Route path='/periodo-academico' element={<DatePeriodPage/>}/>
          <Route path='/carta-descriptiva' element={<DescriptivePage/>}/>
          <Route path='/cronograma-html' element={<ButtonCronogramaGenerator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

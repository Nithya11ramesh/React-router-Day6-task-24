
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import All from './components/All'
import FullStack from './components/FullStack'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import NavBar from './components/NavBar'
import Career from './components/Career'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<All/>} />
        <Route path='/FullStack' element={<FullStack/>} />
        <Route path='/DataScience' element={<DataScience/>} />
        <Route path='/CyberSecurity' element={<CyberSecurity/>} />
        <Route path='/Career' element={<Career/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

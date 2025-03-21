import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.scss'
import Signup from './signup/Signup'
import Signin from './signin/Signin'
import Home from './home/Home'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

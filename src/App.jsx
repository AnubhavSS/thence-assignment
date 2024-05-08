import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import Signup from './screens/Signup'
function App() {
 

  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home/>}  /> 
      <Route path="/signup" element={<Signup/>}  /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App

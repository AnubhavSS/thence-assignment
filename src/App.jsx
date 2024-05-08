import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './screens/Home'
import Signup from './screens/Signup'
import Success from './screens/Success'
function App() {
 

  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home/>}  /> 
      <Route path="/signup" element={<Signup/>}  /> 
      <Route path="/success" element={<Success/>}  /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App

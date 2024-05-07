import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './screens/Home'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}  /> {/* 👈 Renders at /app/ */}
    </Routes>
  </BrowserRouter>
  )
}

export default App

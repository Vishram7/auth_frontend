import './App.css'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App

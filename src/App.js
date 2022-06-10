import {   BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Login from './Components/pages/Login';
import Trial from './Components/pages/Trial';
import Navbar from './Components/Navbar';
function App() {
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/trial" element={<Trial/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;

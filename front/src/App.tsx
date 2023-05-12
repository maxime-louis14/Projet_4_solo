import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import Home from './pages/Home';
import Dragdrop from './pages/Dragdrop';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
        <Routes>
          <Route path='/Login' element={<LoginComponent/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload' element={<Dragdrop/>}/>
        </Routes>
        
    </div>
  );
}

export default App;

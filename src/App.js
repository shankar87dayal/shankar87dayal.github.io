import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import CustomNavbar from './components/CoustomNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

//  const [x,setx]= useState(50)

const sayHello=()=>{
  alert("Hello, How are u")
}

  return (
    
    <BrowserRouter>
    <CustomNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

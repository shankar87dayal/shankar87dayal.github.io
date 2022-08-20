import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

//  const [x,setx]= useState(50)

const sayHello=()=>{
  alert("Hello, How are u")
}

  return (
    <div className='container'>
     <h1>This is Root Element</h1>
      <Home myFun={sayHello} title ="learn javascript" description="we are learning javascript " buttonName="subscribe" />

      <Home myFun={sayHello} title ="learn react js" description="we are learning react js " buttonName="subscribe & like" />
      
      <Home myFun={sayHello} title ="learn java" description="we are learning java " buttonName="like" />
      
      <Home myFun={sayHello} title ="learn fullstack development" description="we are learning fullstack development " buttonName="click me" />
      <Home myFun={sayHello} />
      
      

    </div>
  );
}

export default App;

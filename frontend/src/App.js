import './App.css';
import { useState, useEffect } from "react";
import Header from './components/header';
import Dashboard from'./components/dashboard';
import Count from './components/count';
import Home from './components/home';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Speed from './components/speed'




function App() {
  return (
    <div className='Bodycontent'>
      <Header/>
      <div className="container">
        <Dashboard/>
        <div className="others">

        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/count' element={<Count/>} />
            <Route path='/count/hourly' element={<Speed/>} />
            <Route path='/speed' element={<Speed/>} />
          </Routes>
        </Router>
    </div>
    </div>
    </div>
  );
}
export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';

function App() {
  return (
    <React.Fragment>
        <Header/>
         <Home/>
    </React.Fragment>
    
    
  );
}

export default App;

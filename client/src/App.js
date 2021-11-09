import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import {Box} from '@material-ui/core'  ;
import DetailView from './components/post/DetailView';
import { BrowserRouter, Switch, Route,Routes } from 'react-router-dom';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';


function App() {
  return (
    <BrowserRouter>
        <Header/>

         <Box style={{marginTop:64}}>
           <Routes>

           <Route exact path='/' element={<Home/>} />
           <Route exact path='/details' element={<DetailView/>} />
            <Route exact path='/create'  element={<CreateView/>}  />
            <Route exact path='/update'  element={<UpdateView/>}  />
         </Routes>

         </Box>
    </BrowserRouter>
    
    
  );
}

export default App;

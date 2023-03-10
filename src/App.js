
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/RowPost/Rowpost';
import axios from 'axios';
import {originals,action} from './URLs'
import Text from './components/Text';


function App() {
  
  return (
    <div className="App">
       <Navbar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix Originals"/> 
      <Rowpost url={action}title="Action Movies" isSmall/> 
    
    
    </div>
  );
}


export default App;

import React from 'react';
import './App.css';
import Wrapper from './component/Wrapper';
import Title from './component/Title';

import Career from './component/Career';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <div className="container">
  <BrowserRouter>
 
        <div className="App">
          <Title/>
          <Routes>
 
          <Route exact path="/Wrapper" element={<Wrapper/>}/>
          <Route exact path="/Career" element={<Career/>}/>
          </Routes>
        </div>
  </BrowserRouter>

    
  
    </div>

  );
}

export default App;

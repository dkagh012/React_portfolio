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
 
  <Route path="/">
          <Title/>
        </Route>
        <Route path="/Wrapper">
          <Wrapper/>
        </Route>
        <Route path="/Career">
          <Career/>
        </Route>
        
  </BrowserRouter>

    
  
    </div>

  );
}

export default App;

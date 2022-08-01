import React from "react";
import './App.css';
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";


function App() { 
  return (
    <div className="App">
      <Router/>
      <GlobalStyle/>
    </div>
  );
}

export default App;

import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./style.css";

import Home from "./Pages/Home";
import CelestialBody from "./Pages/CelestialBody";

import { BodyContext } from "./bodyContext";

function App() {
  const { bodies } = useContext(BodyContext);
  // const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);
  
  return (
    <Router>
      <Routes>
        {bodies.map((body, key) => (
          <Route 
            key={key}
            exact path={`/${body.name.toLowerCase()}`}
            element={
              <div className="App" id="app">
                <CelestialBody data={body} />
              </div>
            } />
        ))}
        
        <Route 
          exact path="/" 
          element={
            <div className="App" id="app">
              <Home />
            </div>
          }/>
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";

import Home from "./Pages/Home";

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App" id="app">
    //     <Link to="/"><Home /></Link>
    //     <Link to="/sun">sun</Link>
    //   </div>
    // </BrowserRouter>

    // <div className="App" id="app">
    //   <Home />
    // </div>

    <Router>
      <Routes>
        <Route exact path="/sun" element={<div>Sun</div>} />
        <Route exact path="/mercury" element={<div>mercury</div>} />
        <Route exact path="/venus" element={<div>venus</div>} />
        <Route exact path="/earth" element={<div>earth</div>} />
        <Route exact path="/mars" element={<div>mars</div>} />
        <Route exact path="/jupiter" element={<div>jupiter</div>} />
        <Route exact path="/satern" element={<div>satern</div>} />
        <Route exact path="/neptune" element={<div>neptune</div>} />
        <Route exact path="/uranus" element={<div>uranus</div>} />
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

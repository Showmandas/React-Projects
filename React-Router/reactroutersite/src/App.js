import React from "react";
import {Routes,Route} from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Error from './Error'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes> */}
      {/* Nested  Route */}
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

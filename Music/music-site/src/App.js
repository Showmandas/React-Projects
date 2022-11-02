import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import About from "./About";
import MusicBank from "./MusicBank";
import Contact from "./Review";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/musicbank" component={MusicBank}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

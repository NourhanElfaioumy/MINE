import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Slider from "./Components/Slider";
import Section from "./Components/Section";
import Home from "./Components/Home";
import FirstPage from "./Components/first";
import About from "./Components/About";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/services/:id?" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/navbar" component={Navbar} />
          <Route path="/slider" component={Slider} />
          <Route path="/home" component={Home} />
          <Route path="/section" component={Section} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={FirstPage} />
        </div>
      </Switch>
    </Router>
  );
}
export default App;

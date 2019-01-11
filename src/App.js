import React, { Component } from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/normalize.css";
import "./assets/css/App.css";
import Hero from "./components/hero";
import Services from "./components/services";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <img src={logo} className="logo" alt="logo" />
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
        <Hero />
        <Services />
      </div>
    );
  }
}

export default App;

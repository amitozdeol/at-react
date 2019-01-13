import React, { Component } from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import Hero from "./components/hero";
import Services from "./components/services";
import PigeonMap from "./components/PigeonMap";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <img src={logo} className="logo" alt="logo" />
          <ul>
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#contactus" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <Hero />
        <div className="content">
          <PigeonMap />
          <Services />
        </div>
        <footer className="footer">
          <p className="m-0">
            © {new Date().getFullYear()} Artist taxi
            <span> | </span>
            All Rights Reserved
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

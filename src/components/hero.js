import React, { Component } from "react";

export default class hero extends Component {
  render() {
    return (
      <div className="hero">
        <div class="hero-content">
          <h1 className="hero-title">ARTIST TAXI</h1>
          <div className="hero-subtitle">
            Local taxi company in New paltz. We are always here, at your
            service.
          </div>
          <div className="btn-container">
            <div className="col-md-6 text-right">
              <a className="btn btn-lg btn-secondary">CALL US NOW</a>
            </div>

            <div className="col-md-6 text-left">
              <a href="tel:+18454431922" className="btn btn-lg btn-primary">
                845 - 445 - 1922
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

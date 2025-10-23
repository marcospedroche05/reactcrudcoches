import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuCoches extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              CRUD Coches
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/createcoches">
                    Create coche
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

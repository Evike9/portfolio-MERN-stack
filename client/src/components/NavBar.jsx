import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/style.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="logo-title">
        <h4>evi:ke</h4>
      </div>

      <div className="nav-link">
        <NavLink className="link" to="/projects">
          PROJECTS
        </NavLink>

        <NavLink className="link" to="/projects/create">
          NEW PROJECT
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

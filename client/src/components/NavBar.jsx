import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/style.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        <img src={logo} alt="logo" className="logo" />
        {/* <div className="logo-title">
        evi:ke portfolio 
        </div> */}
      </NavLink>
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

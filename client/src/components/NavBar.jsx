import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../public/images/logo"; FAILED TO COMPILED!!!

import "../styles/style.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        <img src="/logo" alt="logo" />
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

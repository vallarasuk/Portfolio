import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks = ({ isMenuOpen }) => {
  return (
    <ul
      className={`navbar-nav ms-auto mb-2 mb-lg-0 text-center py-2 ${
        isMenuOpen ? "show" : ""
      }`}
    >
      <li className="nav-item">
        <NavLink
          className="nav-link my-2 mx-md-2"
          activeClassName="active"
          aria-current="page"
          to="/home"
          exact
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item my-2 mx-md-2">
        <NavLink className="nav-link" activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item my-2 mx-md-2">
        <NavLink className="nav-link" activeClassName="active" to="/resume">
          Resume
        </NavLink>
      </li>
      <li className="nav-item my-2 mx-md-2">
        <NavLink className="nav-link" activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item my-2 mx-md-2">
        <NavLink className="nav-link" activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
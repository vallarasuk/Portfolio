import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg shadow rounded-pill mt-4">
      <div className="container px-md-5">
        <Link
          className="navbar-brand"
          to="https://www.linkedin.com/in/vallarasu-k/"
        >
          vallarasu_kanthasamy
        </Link>
        <FontAwesomeIcon
          onClick={handleMenuToggle}
          className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
          icon={faNavicon}
        />
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center py-2">
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
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item my-2 mx-md-2">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/skills"
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item my-2 mx-md-2">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/service"
              >
                Service
              </NavLink>
            </li>
            <li className="nav-item my-2 mx-md-2">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item my-2 mx-md-2">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;

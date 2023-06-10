import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavigationLinks from "./lib/NavigationLinks";

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg mt-4">
      <div className="container px-md-5 shadow rounded-5 p-3 rounded-lg-pill">
        <Link className="navbar-brand" to="/">
          Vallarasu_Kanthasamy
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
          type="button"
          onClick={handleMenuToggle}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <NavigationLinks isMenuOpen={isMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;

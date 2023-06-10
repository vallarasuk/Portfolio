import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavigationLinks from "./lib/NavigationLinks";

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
          <NavigationLinks />
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;

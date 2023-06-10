import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuToggle from "./lib/MenuToggle";
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
        <MenuToggle
          isMenuOpen={isMenuOpen}
          handleMenuToggle={handleMenuToggle}
        />
        <NavigationLinks isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default HeaderSection;

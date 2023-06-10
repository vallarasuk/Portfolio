import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";

const MenuToggle = ({ isMenuOpen, handleMenuToggle }) => {
  return (
    <FontAwesomeIcon
      onClick={handleMenuToggle}
      className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
      icon={faNavicon}
    />
  );
};

export default MenuToggle;

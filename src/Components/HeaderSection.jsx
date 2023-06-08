import React from "react";

const HeaderSection = () => {
  return (
    <div>
      <h1>HeaderSection</h1>
      {/* NAVBAR SECTION */}
      <header>
        {/* Logo */}
        <a href="index.html" className="logo navbar-brand">Vallarasu k</a>
        <div className="bx bx-menu" id="menu-icons"></div>
      
        {/* Menu items */}
        <ul className="navbar" id="navbar">
          <li><a className="text-decoration-none nav-item" href="#home">HOME</a></li>
          <li><a className="text-decoration-none nav-item" href="#about">ABOUT</a></li>
          <li><a className="text-decoration-none nav-item" href="#skills">SKILLS</a></li>
          <li><a className="text-decoration-none nav-item" href="#services">SERVICES</a></li>
          <li><a className="text-decoration-none nav-item" href="#portfolio">PORTFOLIO</a></li>
          <li><a className="text-decoration-none nav-item" href="#contact">CONTACT</a></li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderSection;

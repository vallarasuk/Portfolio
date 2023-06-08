import React from "react";

const HeaderSection = () => {
  return (
    <div>
      <h1>HeaderSection</h1>
      <header>
        <a href="index.html" class="logo navbar-brand">
          Vallarasu k
        </a>
        <div class="bx bx-menu" id="menu-icons"></div>

        <ul class="navbar" id="navbar">
          <li>
            <a class="text-decoration-none nav-item" href="#home">
              HOME
            </a>
          </li>
          <li>
            <a class="text-decoration-none nav-item" href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a class="text-decoration-none nav-item" href="#skills">
              SKILLS
            </a>
          </li>
          <li>
            <a class="text-decoration-none nav-item" href="#services">
              SERVICES
            </a>
          </li>
          <li>
            <a class="text-decoration-none nav-item" href="#portfolio">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a class="text-decoration-none nav-item" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderSection;

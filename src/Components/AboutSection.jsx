import React from "react";

const AboutSection = () => {
  return (
    <section className="about shadow container rounded-3 mt-lg-5" id="about">
      <div className="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src="image/my.png" alt="About Images" />
        </div>
        <div className="about-text">
          <p>
            <ul className="h6">
              <li>Building Websites and apps that are responsive.</li>
              <li>
                Constantly Learning new skills and improving my performance.
              </li>
              <li>Documents Bug reports, tickets, and any code changes.</li>
              <li>
                Good Collaboration with team members to complete clients
                Projects.
              </li>
              <li>
                Communicating Technical issues in an understandable manner to
                the team and clients.
              </li>
            </ul>
          </p>

          {/* Some INFO */}
          <div className="information px-lg-5">
            {/* Name box */}
            <div className="info-box">
              <i className="bx bxs-user"></i>
              <span>Vallarasu k</span>
            </div>

            {/* Contact box */}
            <div className="info-box">
              <i className="bx bxs-phone"></i>
              <span>+91 81229 92143</span>
            </div>

            {/* Mail box */}
            <div className="info-box">
              <i className="bx bxs-envelope"></i>
              <span>vallarasuk143@gmail.com</span>
            </div>
          </div>
          {/* Btn */}
          <a href="assects/VALLARASU K Resume.pdf" className="btn btn-danger">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

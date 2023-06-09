import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="text-center my-3 mb-lg-5">
          <span className="shadow p-3 rounded-pill px-4 h3">About Me</span>
          <br />
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 align-self-center p-5 ">
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdTR65uqDuMWw1c6U_ytxpWT6q2GnjBy1Og1p4dGaWw&usqp=CAU&ec=48665701"
                alt="About Images"
                className="shadow p-4 rounded-circle"
              />
              <div className="social text-end d-flex justify-content-evenly mt-3">
                <a
                  href="https://github.com/vallarasuk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    className="shadow p-2 p-md-3 rounded-5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/vallarasu-k/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className="shadow p-2 p-md-3 rounded-5"
                  />
                </a>
                <a
                  href="https://www.instagram.com/vallarasu_kanthasamy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="shadow p-2 p-md-3 rounded-5"
                  />
                </a>

                <span>
                  <a
                    href="https://wa.me/+918122992143"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size="xl"
                      className="shadow p-2 p-md-3 rounded-5"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-content">
              <ul className="about-list">
                <li>Building Websites and apps that are responsive.</li>
                <li>
                  Constantly learning new skills and improving my performance.
                </li>
                <li>Documenting bug reports, tickets, and code changes.</li>
                <li>
                  Collaborating with team members to complete client projects.
                </li>
                <li>
                  Communicating technical issues effectively to the team and
                  clients.
                </li>
              </ul>
              {/* Some INFO */}
              <div className="information">
                {/* Name box */}
                {/* <div className="info-box">
                  <i className="bx bxs-user"></i>
                  <span>Vallarasu K</span>
                </div> */}

                {/* Contact box */}
                <div className="shadow p-3 rounded-pill mb-3">
                  <FontAwesomeIcon icon={faPhone} size="xl" className="mx-3" />
                  <span>
                    <a
                      href="https://wa.me/+918122992143"
                      rel="noreferrer"
                      target="_blank"
                      className="text-decoration-none ms-2"
                    >
                      +91 81229 92143
                    </a>
                  </span>
                </div>

                <div className="shadow p-2 py-3 p-sm-3 rounded-pill">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    className="mx-sm-3"
                  />
                  <span>
                    <a
                      href="mailto:vallarasuk143@gmail.com"
                      className="text-decoration-none ms-2"
                    >
                      vallarasuk143@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

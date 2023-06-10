import React from "react";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ContactInfo from "./lib/ContactInfo";
import SocialLinks from "./lib/SocialLinks";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
                <SocialLinks
                  href="https://github.com/vallarasuk"
                  icon={faGithub}
                />
                <SocialLinks
                  href="https://www.linkedin.com/in/vallarasu-k/"
                  icon={faLinkedin}
                />
                <SocialLinks
                  href="https://www.instagram.com/vallarasu_kanthasamy/"
                  icon={faInstagram}
                />
                <SocialLinks
                  href="https://wa.me/+918122992143"
                  icon={faWhatsapp}
                />
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
                {/* Contact box */}
                <ContactInfo
                  icon={faPhone}
                  href="https://wa.me/+918122992143"
                  text="+91 81229 92143"
                />
                <ContactInfo
                  icon={faEnvelope}
                  href="mailto:vallarasuk143@gmail.com"
                  text="vallarasuk143@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

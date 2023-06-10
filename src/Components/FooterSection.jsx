import React from "react";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import SocialLinks from "./lib/SocialLinks";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-title">VALLARASU K</h2>
        <div className="footer-social">
          <SocialLinks href="https://github.com/vallarasuk" icon={faGithub} />
          <SocialLinks
            href="https://www.linkedin.com/in/vallarasu-k-a57137208"
            icon={faLinkedin}
          />
          <SocialLinks
            href="https://www.instagram.com/vallarasu_kanthasamy/"
            icon={faInstagram}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

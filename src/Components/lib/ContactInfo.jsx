import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactInfo = ({ icon, href, text }) => {
  return (
    <div className="shadow p-3 rounded-pill mb-3">
      <FontAwesomeIcon icon={icon} size="xl" className="mx-3" />
      <span>
        <a
          href={href}
          rel="noreferrer"
          target="_blank"
          className="text-decoration-none ms-2"
        >
          {text}
        </a>
      </span>
    </div>
  );
};

export default ContactInfo;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialLinks = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        size="xl"
        className="shadow p-2 p-md-3 rounded-5"
      />
    </a>
  );
};

export default SocialLinks;

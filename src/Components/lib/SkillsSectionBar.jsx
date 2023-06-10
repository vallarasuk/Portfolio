import React from "react";

const SkillsSectionBar = ({ title, percentage, barClass }) => {
  return (
    <div className="col">
      <div className="bars-box shadow p-5 rounded-5 ">
        <h3>{title}</h3>
        <span>{percentage}%</span>
        <div className="light-bar"></div>
        <div className={`percent-bar ${barClass}`}></div>
      </div>
    </div>
  );
};

export default SkillsSectionBar;

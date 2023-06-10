import React from "react";

const Title = ({ text }) => {
  return (
    <div className="text-center my-3 mb-lg-5">
      <span className="shadow p-3 rounded-pill px-4 h3">{text}</span>
      <br />
    </div>
  );
};

export default Title;

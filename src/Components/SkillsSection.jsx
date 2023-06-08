import React from "react";

const SkillsSection = () => {
  return (
    <section
      className="skills shadow container my-lg-5 p-lg-3 rounded-3"
      id="skills"
    >
      {/* Heading */}
      <div className="heading">
        <h2>Skills</h2>
        <span>My skills</span>
      </div>

      {/* Skills Content */}
      <div className="skills-container">
        <div className="bars">
          {/* Bar 1 */}
          <div className="bars-box">
            <h3>HTML</h3>
            <span>95%</span>
            <div className="light-bar"></div>
            <div className="percent-bar html-bar"></div>
          </div>

          {/* Bar 2 */}
          <div className="bars-box">
            <h3>CSS</h3>
            <span>75%</span>
            <div className="light-bar"></div>
            <div className="percent-bar css-bar"></div>
          </div>

          {/* Bar 3 */}
          <div className="bars-box">
            <h3>JavaScript</h3>
            <span>70%</span>
            <div className="light-bar"></div>
            <div className="percent-bar js-bar"></div>
          </div>

          {/* Bar 4 */}
          <div className="bars-box">
            <h3>Bootstrap</h3>
            <span>85%</span>
            <div className="light-bar"></div>
            <div className="percent-bar bootstrap-bar"></div>
          </div>

          {/* Bar 5 */}
          <div className="bars-box">
            <h3>React js</h3>
            <span>65%</span>
            <div className="light-bar"></div>
            <div className="percent-bar react-bar"></div>
          </div>

          {/* Bar 6 */}
          <div className="bars-box">
            <h3>Github</h3>
            <span>80%</span>
            <div className="light-bar"></div>
            <div className="percent-bar github-bar"></div>
          </div>
        </div>
        {/* Images */}
        <div className="skills-img">
          <img src="image/skill.png" alt="Skills Images" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

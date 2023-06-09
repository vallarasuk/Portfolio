import React from "react";

const SkillsSection = () => {
  return (
    <section className="skills container my-lg-5 p-lg-3 rounded-3" id="skills">
      {/* Heading */}
      <div className="text-center my-3 mb-lg-5">
        <span className="shadow p-3 rounded-pill px-4 h3">Skills</span>
        <br />
      </div>

      {/* Skills Content */}
      <div className="skills-container">
        <div className="row  d-flex justify-content-evenly">
          {/* Bar 1 */}
          <div className="col">
            <div className="bars-box shadow p-5 rounded-5 ">
              <h3>HTML</h3>
              <img src={"../Components/Assects/html.png"} alt="Demohhhhhhhhhhh" />
              <span>95%</span>
              <div className="light-bar"></div>
              <div className="percent-bar html-bar"></div>
            </div>
          </div>

          {/* Bar 2 */}
          <div className=" col">
            <div className="bars-box shadow p-5 rounded-5 ">
              <h3>CSS</h3>
              <span>75%</span>
              <div className="light-bar"></div>
              <div className="percent-bar css-bar"></div>
            </div>
          </div>

          {/* Bar 3 */}
          <div className="col">
            <div className="bars-box shadow p-5 rounded-5 ">
              <h3>JavaScript</h3>
              <span>70%</span>
              <div className="light-bar"></div>
              <div className="percent-bar js-bar"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Bar 4 */}
          <div className="col">
            <div className="bars-box shadow p-5 rounded-5 ">
              <h3>Bootstrap</h3>
              <span>85%</span>
              <div className="light-bar"></div>
              <div className="percent-bar bootstrap-bar"></div>
            </div>
          </div>

          {/* Bar 5 */}
          <div className="col">
            <div className="bars-box shadow p-5 rounded-5 ">
              <h3>React js</h3>
              <span>65%</span>
              <div className="light-bar"></div>
              <div className="percent-bar react-bar"></div>
            </div>
          </div>

          {/* Bar 6 */}
          <div className="col">
            <div className="bars-box shadow p-5 rounded-5 ">
              <h3>Github</h3>
              <span>80%</span>
              <div className="light-bar"></div>
              <div className="percent-bar github-bar"></div>
            </div>
          </div>
        </div>

        {/* Images */}
        {/* <div className="row">
          <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-0">
            <div className="skills-img">
              <img src="image/skill.png" alt="Skills Images" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;

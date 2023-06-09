import React from "react";

const ServiceSection = () => {
  return (
    <div>
      {/* SERVICES SECTION */}
      <section
        className="services shadow container my-lg-5 rounded-3"
        id="services"
      >
        {/* service heading */}
        <div className="heading">
          <h2>Services</h2>
          <span>Our Services</span>
        </div>

        {/* service content */}
        <div className="services-content">
          {/* Box -1 */}
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Front End Development</h3>
            <a href="#/" className="btn btn-outline-danger text-secondary">
              Learn More
            </a>
          </div>

          {/* Box -2 */}
          <div className="services-box">
            <i className="bx bx-server"></i>
            <h3>Back End Development</h3>
            <a href="#/" className="btn btn-outline-danger text-secondary">
              Learn More
            </a>
          </div>

          {/* Box -3 */}
          <div className="services-box">
            <i className="bx bxl-bootstrap"></i>
            <h3>Responsive Websites</h3>
            <a href="#/" className="btn btn-outline-danger text-secondary">
              Learn More
            </a>
          </div>

          {/* Box -4 */}
          <div className="services-box">
            <i className="bx bxl-react"></i>
            <h3>React Js</h3>
            <a href="#/" className="btn btn-outline-danger text-secondary">
              Learn More
            </a>
          </div>

          {/* Box -5 */}
          <div className="services-box">
            <i className="bx bx-git-branch"></i>
            <h3>Version Control</h3>
            <a href="#/" className="btn btn-outline-danger text-secondary">
              Learn More
            </a>
          </div>

          {/* Box -6 */}
          <div className="services-box">
            <i className="bx bx-support"></i>
            <h3>Customer Support</h3>
            <a href="#/" className="btn btn-outline-danger text-secondary">
              Learn More
            </a>
          </div>

          {/* Btn */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "141.4286%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "1.6em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              title="Resume"
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAE5E529mFY/view?embed"
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="https://www.canva.com/design/DAE5E529mFY/view?utm_content=DAE5E529mFY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-end d-block mx-3"> BY VALLARASU K</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;

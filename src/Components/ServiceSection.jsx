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
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;

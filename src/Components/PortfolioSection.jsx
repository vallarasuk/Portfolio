import React from "react";

const PortfolioSection = () => {
  return (
    <div>
      {/* PORTFOLIO SECTION */}
      <section
        className="portfolio container shadow mt-lg-5 rounded-3"
        id="portfolio"
      >
        {/* Heading */}
        <div className="heading">
          <h2>Portfolio</h2>
          <span>My Recent Works</span>
        </div>

        {/* content */}
        <div className="portfolio-content">
          <a href="https://github.com/vallarasuk/static-website.github.io">
            <div className="portfolio-img">
              <img src="assects/blog-2.jpg" alt="Recent Works" />
            </div>
          </a>

          <div className="portfolio-img">
            <img src="assects/blog-3.jpg" alt="Recent Works" />
          </div>

          <div className="portfolio-img">
            <img src="assects/blog-4.jpg" alt="Recent Works" />
          </div>

          <div className="portfolio-img">
            <img src="assects/blog-5.jpg" alt="Recent Works" />
          </div>

          <div className="portfolio-img">
            <img src="assects/blog-6.jpg" alt="Recent Works" />
          </div>

          <div className="portfolio-img">
            <img src="assects/blog-7.jpg" alt="Recent Works" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;

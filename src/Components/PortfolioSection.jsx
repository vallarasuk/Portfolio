import React from "react";
import otter from "./Assects/otto.png";
import blogInternet from "./Assects/blogInternet.png";
import vote from "./Assects/vote-check.png";
import PortfolioCard from "./lib/PortfolioCard";

const PortfolioSection = () => {
  return (
    <div>
      {/* PORTFOLIO SECTION */}
      <section className="container mt-lg-5 rounded-3" id="portfolio">
        {/* Heading */}
        <div className="text-center my-3 mb-lg-5">
          <span className="shadow p-3 rounded-pill px-4 h3">Portfolio</span>
          <br />
        </div>

        {/* Content */}
        <div className="portfolio-content row">
          <PortfolioCard
            title="Otter"
            imageSrc={otter}
            description="Otter matches parents who need care with trusted sitters in their community, on-demand."
            previewLink="https://vallarasuk.github.io/otto-landing-page/"
            githubLink="https://github.com/vallarasuk/otto-landing-page"
          />
          <PortfolioCard
            title="Front-End Blog"
            imageSrc={blogInternet}
            description="As a developer, it is important to have a solid understanding of what the internet is and how it works."
            previewLink="https://vallarasuk.github.io/Front-End-Blog/"
            githubLink="https://github.com/vallarasuk/Front-End-Blog"
          />
          <PortfolioCard
            title="Vote Check"
            imageSrc={vote}
            description="User age-based vote calculation feature that allows only valid users to vote while displaying appropriate error messages."
            previewLink="https://vallarasuk.github.io/Vote-Check/"
            githubLink="https://github.com/vallarasuk/Vote-Check"
          />
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;

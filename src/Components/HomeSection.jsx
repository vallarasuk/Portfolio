import React from "react";

const HomeSection = () => {
  return (
    <>
      <section className="home container shadow my-lg-5 rounded-3" id="home">
        <div className="social">
          <a
            href="https://github.com/vallarasuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github shadow"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vallarasu-k-a57137208"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx shadow bxl-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/vallarasu_kanthasamy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram shadow"></i>
          </a>
        </div>

        <div className="home-img">
          <img src="image/web.gif" alt="home images" />
        </div>

        <div className="home-text shadow p-4 bg-secondary rounded-5 bg-opacity-50">
          <span>Hello, I'm</span>
          <h1 className="text-danger">Vallarasu k</h1>
          <h2>Front End Developer</h2>
          <p className="h5">
            I'm seeking a Fresher Role in the FRONT END DEVELOPER Position,
            Interested in learning new concepts & problem-solving techniques.
          </p>
          <a href="#/" className="btn btn-outline-primary">
            Contact
          </a>
        </div>
      </section>
    </>
  );
};

export default HomeSection;

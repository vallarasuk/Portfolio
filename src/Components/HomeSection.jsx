import React from "react";

const HomeSection = () => {
  return (
    <>
      <section
        className="home container p-md-5 rounded-5 my-lg-5 my-4"
        id="home"
      >
        <div className="row">
          <div className="col-lg-6  rounded-5 p-4">
            <div className="home-text bg-opacity-50">
              <span>Hello, I'm</span>
              <h1 className="text-danger">Vallarasu k</h1>
              <h2>Front End Developer</h2>
              <p className="">
                I'm a Front End Developer with 6 months of experience. I'm
                skilled in React and passionate about learning new concepts and
                problem-solving techniques. I enjoy building intuitive user
                interfaces and constantly strive to improve my skills and stay
                up-to-date with the latest industry trends. I'm actively seeking
                new opportunities to contribute to exciting projects and further
                enhance my expertise as a Front End Developer.
              </p>
              <a href="#/" className="btn btn-outline-primary">
                Contact
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-none mt-sm-4 d-sm-block justify-content-center ">
            <div className="home-img">
              <img
                src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif"
                width={"100%"}
                height={"50%"}
                alt="home images"
                className="rounded-5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;

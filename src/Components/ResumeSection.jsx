import React from "react";

const ResumeSection = () => {
  return (
    <div>
      {/* Resume SECTION */}
      <section className="services container my-lg-5 rounded-3" id="services">
        {/* Resume heading */}
        <div className="text-center my-3 mb-lg-5">
          <span className="shadow p-3 rounded-pill px-4 h3">Resume</span>
          <br />
        </div>
        {/* Resume content */}
        <div className="services-content">
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
          {/* <a
            href="https://www.canva.com/design/DAE5E529mFY/view?utm_content=DAE5E529mFY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-end d-block mx-3"> BY VALLARASU K</span>
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default ResumeSection;

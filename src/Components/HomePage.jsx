import React from "react";
import "./styles.css"; // Import the CSS file

const HomePage = () => {
  return (
    <>
      <div className="card rounded-5 border shadow">
        <div className="card-body">
          <img src="../../src/Assects/ProfileLogo.png" alt="Logo Images" />
          <h1 className="text-uppercase custom-heading">
            Vallarasu kanthasamy
          </h1>
          <div className="row">
            <div className="d-block">
              {/* <a href="" className="d-block">Instagram</a> */}
              {/* <a href="" className="d-block">LinkedIn</a> */}
              {/* <a href="" className="d-block">GitHub</a> */}
              {/* <a href="" className="d-block">Whatsapp</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

import React from "react";

import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make </h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
          minus.
        </p>
        <button>Contact Us</button>
      </div>
      <img src={home1} alt="a guy" />
    </div>
  );
};

export default AboutSection;

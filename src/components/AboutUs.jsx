import React from "react";
import "./AboutUs.css";
import Mohit from "../assets/m.png";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs-top">
        <h2>AboutUs Page</h2>
        <hr />
        <h4>Welcome to our platform!</h4>
        <p style={{ fontSize: "20px", margin: "0px 20vw" }}>
          We are developer's developing the web elements to build an environment
          for humans willing to explore, create and evolve with everyday
          technologies
        </p>
        <p style={{ fontSize: "16px", margin: "0px 10vw" }}>
          We are dedicated to providing developers with a comprehensive and
          innovative environment for their coding endeavors. Whether you're a
          seasoned professional or just starting your journey in the world of
          development, our platform is designed to support your growth,
          creativity, and productivity.
        </p>
      </div>
      <h3 style={{ textAlign: "center", margin: "2vw" }}>
        <u></u>Our Team
      </h3>
      <hr style={{ margin: "0 10vw 2vw" }} />
      <h3 style={{ textAlign: "center", margin: "2vw" }}>
        In this initial development phase I'm solo working on every node of this
        project as a FULLSTACK DEVELOPER
      </h3>
      <div className="aboutUs-profiles">
        <div className="aboutUs-profile">
          <img src={Mohit} alt="" className="aboutUs-image" />
          <h1>Mohit Singh</h1>
          <p>Website Developer</p>
          <p>Explore Create Evolve ⛰</p>
          <p>mohitsinghwrkn@gmail.com</p>
          <p>IND +91 9548288062</p>
          <a
            href="mailto:mohitsinghwrkn@gmail.com
?subject='Hello from Abstract!'&body='Just popped in to say hello'"
          >
            <button className="aboutUs-button">contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

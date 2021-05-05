import React from "react";
import "./About.css";

function About() {
  return (
    <div className="section">
      <div className="inner-container">
        <div className="content-section">
          <div className="title">
            <h1>AboutUs</h1>
          </div>
          <div className="contennt">
            <h3>OCTA-TEK Pty Ltd provides industrial automation services</h3>
            <p>
              • Deliver to our clients a wide range of high quality automation
              solutions benefiting from the latest technologies available in the
              market. <br></br> • Professional experience in design,
              engineering, programming, configuration and testing.<br></br>• We
              have many industries fields like : Oil & Gas - Water and waste
              water - Manufacturing - Mining - Building management systems -
              Fire & Gas systems.
            </p>
          </div>
        </div>

        <div className="imagge-section">
          <img src="../images/auto2.jpg" />
        </div>
      </div>
    </div>
  );
}
export default About;

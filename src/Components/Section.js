import React from "react";
import "./Section.css";

function Section() {
  return (
    <div className="container-fluid slides">
      <div className="row">
        <div className="content col-6">
          <h2>A solution that customised to 
            your needs matters</h2>
          <p>
            Our promise is to meet your needs, and to fit in your requirments
            and budget with the best possible engineering solutions .
          </p>
        </div>
        <div className="imagebox col-6">
          <img src="../images/img2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Section;

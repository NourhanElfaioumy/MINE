import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div className="jumbotron bg-cover text-white">
      <div className="container overlay py-5 text-center">
        <h1 className="display-4 font-weight-bold">Electrical Automation</h1>
        <p className="font-italic mb-0">
          Deliver to our clients a wide range of high quality automation
          solutions benefiting from<br></br> the latest technologies available
          in the market.
        </p>
        <a href="#">
          <div className="scroll-down"></div>
        </a>
      </div>
    </div>
  );
}
export default Slider;

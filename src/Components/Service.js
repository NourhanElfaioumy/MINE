import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./Service.css";
import Navbar from "./Navbar";
function Service() {
  const [inServices, setInServicesStatus] = useState(false);
  useEffect(() => {
    window.location.pathname === "/services"
      ? setInServicesStatus(true)
      : setInServicesStatus(false);
  }, []);
  return (
    <div>
      {inServices ? <Navbar /> : null}

      <div className="Service">
        <h1>Services</h1>
        <div className="box-container">
          <div className="box color">
            <img className="imgss" src="../images/1.png" alt="" />
            <p>Automation Engineering design & consulting</p>
          </div>
          <div className="box color">
            <img className="imgss" src="../images/2.png" alt="" />
            <p>Electrical & control system design</p>
          </div>
          <div className="box color">
            <img className="imgss" src="../images/3.png" alt="" />
            <p>Automation Engineering design & consulting</p>
          </div>
          <div className="box color">
            <img className="imgss" src="../images/4.png" alt="" />
            <p>Automation Engineering design & consulting</p>
          </div>
          <div className="box color">
            <img className="imgss" src="../images/5.png" alt="" />
            <p>Automation Engineering design & consulting</p>
          </div>
          <div className="box color">
            <img className="imgss" src="../images/6.png" alt="" />
            <p>Automation Engineering design & consulting</p>
          </div>
        </div>
      </div>
      {inServices ? <Footer /> : null}
    </div>
  );
}
export default Service;

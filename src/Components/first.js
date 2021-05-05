import React from "react";
import { Link } from "react-router-dom";

import "./first.css";
function FirstPage() {
  return (
    <div className="container-fluid wrapper">
      <section className="electrical">
        <Link to="/home" className="linkk">
          Electrical Automation
        </Link>
      </section>
      <section className="itservice">
        <Link to="/it" className="linkk">
          IT Services
        </Link>
      </section>
    </div>
  );
}
export default FirstPage;

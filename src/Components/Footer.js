import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
function Footer() {
  return (
    //   <div className="footer">
    //     <p>© 2021 Octa-Tek</p>
    //   </div>
    <div className="footer">
      <div className="footer-info">
        <div className="footer-width about">
          <img src="../images/logoo.png" className="logoo" />
          <div className="social-media">
            <ul>
              <li className="social-icon-facebook">
                <FaFacebookF />
              </li>
              <li className="social-icon-twitter">
                <FaTwitter />
              </li>
              <li className="social-icon-linkedin">
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-width link">
          <h2>Quick Link</h2>
          <ul className="ul-link">
            <li>
              <a href="#">
                <Link to={"/home"}>Home</Link>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Link to={"/services"}>Services</Link>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <Link to={"/contact"}>Contact US</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-width contactt">
          <h2>Contact Us</h2>
          <ul>
            <li className="licontact">
              <span>
                <FaLocationArrow />
              </span>
              <p>Blair Athol, South Australia, 5084</p>
            </li>
            <li className="licontact">
              <span>
                <FaEnvelope />
              </span>
              <a href="sales@octa-tek.com.au">sales@octa-tek.com.au</a>{" "}
            </li>
            <li className="licontact">
              <span>
                <FaMobileAlt />
              </span>
              <a href="#">0434381729</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        <p>© 2021 OCTA-TEK ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
// import Cookies from "js-cookie";
// import { useLocation, useHistory } from "react-router-dom";
// import "react-dropdown/style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Header = () => {
  return (
    <div className="sp-top-bar">
      <div className="container-fluid icons">
        <div className="row">
          <div className="sp-top1 col-lg-6">
            <div className="sp-column text-center text-lg-left">
              <ul className="social-icons">
                <li className="social-icon-facebook">
                  <FaFacebookF />
                </li>
                <li className="social-icon-twitter">
                  <FaTwitter />
                </li>
                <li className="social-icon-pinterest">
                  <FaWhatsapp />
                </li>
                <li className="social-icon-whatsapp">
                  <FaPinterest />
                </li>
                <li className="social-icon-youtube">
                  <FaYoutube />
                </li>
                <li className="social-icon-linkedin">
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
          <div className="sp-top2 col-lg-6">
            <div className="sp-column text-center text-lg-right">
              <ul className="sp-contact-info">
                <li className="sp-contact">
                  <FaMobileAlt />
                  <a href="tel:0434381729">0434381729</a>
                </li>

                <li className="sp-contact-email">
                  <FaEnvelope />
                  <a href="mailto:sales@octa-tek.com.au">
                    sales@octa-tek.com.au
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

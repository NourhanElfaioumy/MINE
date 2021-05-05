import React, { useState, useEffect } from "react";
import "./Contact.css";
import Footer from "./Footer";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_raSr3PtujquWilcfgh8Js");

function Contact() {
  const [inContact, setInContactStatus] = useState(false);
  useEffect(() => {
    window.location.pathname === "/contact"
      ? setInContactStatus(true)
      : setInContactStatus(false);
  }, []);

  var Email = function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gqqwok9",
        "template_ieh9iyq",
        e.target,
        "user_SHeQGCiXbYPRzFWJz3OdC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact">
      {inContact ? <Navbar /> : null}

      <div className="contact-section">
        <div className="contact-info">
          <div>
            <span className="icoon">
              <FaLocationArrow />
            </span>
            Blair Athol, South Australia, 5084{" "}
          </div>
          <div>
            <span className="icoon">
              <FaEnvelope />
            </span>
            sales@octa-tek.com.au{" "}
          </div>
          <div>
            <span className="icoon">
              {" "}
              <FaMobileAlt />{" "}
            </span>
            0434381729{" "}
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form className="contact" action="" method="post" onSubmit={Email}>
            <input
              type="text"
              name="name"
              className="text-box"
              placeholder="Type your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="text-box"
              placeholder="Type your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            />
            <input
              type="submit"
              name="submit"
              className="send-btn"
              value="Send"
            />
          </form>
        </div>
      </div>
      {inContact ? <Footer /> : null}
    </div>
  );
}
export default Contact;

import React from "react";
import Section from "./Section";
import Slider from "./Slider";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
function Home() {
  return (
    <div className="homee">
      <div className="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Navbar />
      <Slider />
      <About />
      <Service />
      <Section />
      <Footer />
    </div>
  );
}
export default Home;

import React from "react";
import reviews from "./AchieversData";
import Testimonials from "./Testimonial";
import "./Achievers.css";

const Achievers = () => {
  return (
  <div className="achievers-box">
    <div className="achievers-title">
      <h1>Our Achievers</h1>
      <div className="achievers-review"></div>
      <Testimonials reviews={reviews}/>
    </div>
  </div>
  )
};

export default Achievers;

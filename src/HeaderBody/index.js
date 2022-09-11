import React from "react";
import headerSec from "../assets/images/headerSec.png";
import "./style.css";
import next from "../assets/images/next.png";

export default function HeaderBody() {
  return (
    <div className="container1 body-container ">
      <div className="header-body-container">
        <div className="header-body-first-container">
          <div className="grow-business-content">Grow Your Business</div>
          <div className="body-deserves-content">
            Your Business Deserves
            <br />
            Modern Technology
          </div>
          <div className="learn-more-div">
            Learn More
            <img src={next} className="next-png" />
          </div>
        </div>
        <div className="header-body-sec-container">
          <img src={headerSec} />
        </div>
      </div>
    </div>
  );
}

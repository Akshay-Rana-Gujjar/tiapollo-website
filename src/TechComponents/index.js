import React from "react";
import "./style.css";

export default function TechnologyItem({ imgSrc, title, desc }) {
  return (
    <div className="technology-expertise-computing-parent-container d-flex flex-column justify-content-center1 position-relative align-items-center ">
      <div className="technology-expertise-img-container rounded-circle d-flex justify-content-center position-absolute align-items-center">
        <img src={imgSrc} className="desktop-img" />
      </div>
      <div className="technology-expertise-computing d-flex justify-content-center text-align-center ">
        {title}
      </div>
      <div className="technology-expertise-Python-nodejs-container">{desc}</div>
    </div>
  );
}

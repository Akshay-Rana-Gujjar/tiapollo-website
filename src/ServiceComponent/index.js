import React from "react";

export default function OurServiceItem({ imgSrc, title, desc }) {
  return (
    <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center   ">
      <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
        <img src={imgSrc} className="desktop-img" />
      </div>
      <div className="our-service-web-application d-flex justify-content-center text-align-center ">
        {title}
      </div>
      <div className="our-service-e-commerce-container">{desc}</div>
    </div>
  );
}

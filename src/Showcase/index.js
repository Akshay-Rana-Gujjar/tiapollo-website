import React from "react";
import "./style.css";
import MobilePhone from "./phone.png";

export default function Showcase() {
  return (
    <div className="Showcase-main-parent-container d-flex flex-column  align-items-center">
      <div className="showcase-text mb-3">Showcase</div>
      <div className="showcase-phn-img-and-text-child-container d-flex justify-content-center ">
        <div className="showcase-mobile-phn-img-container">
          <img
            src={MobilePhone}
            className="showcase-mobile-phn"
            data-aos="fade-down"
          />
        </div>
        <div
          className="showcase-newskon-main-text-container pt-5"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="newskon-text fw-bold">Newskon</div>
          <div className="showcase-notable-event mb-5 fs-4 fw-bold text-muted">
            notable events, weather & sports.
          </div>
          <div className="newskon-child-text-container fs-5 text-muted">
            A news app which provide realtime new updated news. Dark
            <br />
            mode to protect your eyes from blue light. Categorize news and
            <br />
            notification of your selected category.
          </div>
        </div>
      </div>
      <div className="next-slide-div-main-container d-flex justify-content-center ">
        <div className="next-slide-first-div "></div>
        <div className="next-slide-first-div"></div>
        <div className="next-slide-first-div"></div>
        <div className="next-slide-fourth-div"></div>
        <div className="next-slide-first-div"></div>
        <div className="next-slide-first-div"></div>
      </div>
    </div>
  );
}

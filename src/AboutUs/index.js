import React from "react";
import "./style.css";
import user from "../assets/images/user.png";
import target from "../assets/images/target.svg";
import setting from "../assets/images/settings.svg";
import charity from "../assets/images/charity.svg";

export default function AboutUs() {
  return (
    <div className="about-us-parent-container d-flex justify-content-center align-items-center flex-column p-5">
      <div className="about-us fw-bold mb-1 ">ABOUT US</div>
      <div className="about-us-underline mb-4 "></div>
      <div className="about-us-we-at-tiapollo-container text-muted">
        We at Euclid, provide Smart & Innovative solutions using latest
        Technologies.
      </div>
      <div className="who-we-are-our-mission-parent-cont d-flex justify-content-between ">
        <div className="who-we-are-and-what-we-do-container d-flex flex-column pe-2 align-items-end">
          <div className="who-we-are-and-icon-container d-flex justify-content-center align-items-center">
            <div className="who-we-are-main-container me-3">
              <div className="mb-2 fs-5">WHO WE ARE</div>
              <div className="who-we-are-sub-cont mb-5 text-muted">
                We are a Software Outsourcing and Solutions provider
                specializing
                <br /> in providing business solutions with Innovation in
                Technology and <br />
                quality services to our clients globally.
              </div>
            </div>
            <div className="username d-flex justify-content-center align-items-center ">
              <img src={user} className="user-img " />
            </div>
          </div>
          <div className="what-we-do-and-icon-container d-flex justify-content-center align-items-center ">
            <div className="what-we-do-main-container me-3">
              <div className="mb-2 fs-5">WHAT WE DO</div>
              <div className="what-we-do-sub-cont mb-5 text-muted">
                We provide innovative solutions for development of Web <br />
                Applications, Mobile/Tablet Apps and Desktop based <br />
                applications.
              </div>
            </div>
            <div className="username d-flex justify-content-center align-items-center">
              <img src={setting} className="user-img " />
            </div>
          </div>
        </div>

        <div className="our-mission-and-we-love-client-container d-flex align-items-start flex-column-reverse">
          <div className="our-mission-and-icon-container d-flex justify-content-center align-items-center ">
            <div className="username d-flex justify-content-center align-items-center me-3">
              <img src={target} className="user-img " />
            </div>
            <div className="our-mission-main-container">
              <div className="our-mission mb-2 fs-5">OUR MISSION</div>
              <div className="our-mission-sub-container mb-5 text-muted">
                Provide quality software development and consulting <br />
                services to our clients there by giving them competitive <br />
                advantage over their competitors.
              </div>
            </div>
          </div>
          <div className="we-love-and-icon-container d-flex justify-content-center align-items-center">
            <div className="username d-flex justify-content-center align-items-center me-3">
              <img src={charity} className="user-img " />
            </div>
            <div className="we-love-client-main-container">
              <div className="we-love-client mb-2 fs-5">
                WE LOVE OUR CLIENTS
              </div>
              <div className=" we-love-our-client-sub-cont mb-5 text-muted">
                We love to see our clients happy and we make <br />
                that extra effort to bring a smile <br /> on their face.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

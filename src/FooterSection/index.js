import React from "react";
import SendImg from "../assets/images/Send.svg";
import "./style.css";

export default function FooterSection() {
  return (
    <div className="footer-section-parent-container d-flex flex-column justify-content-center align-items-center">
      <div className="footer-section-form-container d-flex flex-column justify-content-center align-items-center">
        <div className="footer-section-contact-us ">Contact Us</div>
        <input
          className="footer-section-input"
          placeholder="Enter your full name"
        />
        <input
          className="footer-section-input"
          placeholder="Enter your full email"
        />
        <textarea
          className="footer-section-input-three "
          placeholder="You message"
        />
        <button className="footer-section-submit-button d-flex g-21">
          Submit
          <img className="footer-submit-img" src={SendImg} />
        </button>
      </div>
      {/* <div className="footer-section-personal-details-parent-container">
        <div className="footer-section-contact-us ">Contact Us</div>
        <input type="text" placeholder="Enter your full name" />
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="You message" />
        <input>Submit</input>
      </div> */}
      <div className="footer-section-copyright-section fw-bold text-muted mb-3">
        Copyright @ TIAPOLLO TECHNOLOGIES
      </div>
    </div>
  );
}

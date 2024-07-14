import logo from "../assets/images/logo.png";
import React from "react";
import "./style.css";
export default function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="container navbar navbar-expand-lg navbar-light1 bg-light1 navbar-container1">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img src={logo} height="35" />
          </div>

          <div
            className=" navbar-light navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-li-info">
              <li className="nav-item ">
                <a
                  className=" nav-link active nav-item-info"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active">Contact</a>
              </li>
            </ul>

            <div className="d-flex flex-sm-row flex-column mail-info-container justify-content-center align-items-center">
              <div className="main-container">Mail</div>
              <div className="contact-info">
                commercial@euclidcommunication.com
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

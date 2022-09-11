import React from "react";
import "./style.css";
import Desktop from "../assets/images/desktop.svg";
import Phone from "../assets/images/smartphone.svg";
import Stastic from "../assets/images/statistic.svg";
import LightBulb from "../assets/images/lightbulb.svg";
import Earth from "../assets/images/earth.svg";
import Cloud from "../assets/images/cloud.svg";
import Settings from "./settings.svg";
import Bug from "../assets/images/bug.svg";
import Epbx from "../assets/images/epbx.svg";
import OurServiceItem from "../ServiceComponent";

export default function OurService() {
  return (
    <div className="our-services-parent-container d-flex justify-content-center align-items-center flex-column p-5">
      <div className="our-services-head-container fw-bold mb-1 ">
        OUR SERVICES
      </div>
      <div className="our-service-underline mb-4 "></div>
      <div className="our-service-we-provide-quality-service-containter text-muted">
        We provide quality Services which are quick, reliable, affordable and
        on-time.
      </div>

      <div className="our-service-different-section-parent-container d-flex flex-wrap justify-content-center">
        {/* first-child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center   ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Desktop} className="desktop-img" />
          </div>
          <div className="our-service-web-application d-flex justify-content-center text-align-center ">
            WEB APPLICATION <br />
            DEVELOPMENT
          </div>
          <div className="our-service-e-commerce-container">
            E-Commerce Websites, Enterprise
            <br /> Web Applications, Customized Web <br /> Solutions, tailored
            to your needs
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Desktop}
          title="WEB APPLICATION  DEVELOPMENT"
          desc={
            <>
              E-Commerce Websites, Enterprise Web Applications, Customized Web
              Solutions, tailored to your needs
            </>
          }
        />
        {/* sec-child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Phone} className="desktop-img" />
          </div>
          <div className="our-service-mobile-tab-application d-flex justify-content-center text-align-center pt-3">
            MOBILE/TABLET APP <br />
            DEVELOPMENT
          </div>
          <div className="our-service-e-commerce-container">
            High-end Quality Apps with excellent
            <br /> UI and UX for all Mobiles and Tablets
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Phone}
          title=" MOBILE/TABLET APP 
          DEVELOPMENT"
          desc={
            <>
              High-end Quality Apps with excellent
              <br /> UI and UX for all Mobiles and Tablets
            </>
          }
        />
        {/* 3rd-child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={LightBulb} className="desktop-img" />
          </div>
          <div className="our-service-project-consultancy-application d-flex justify-content-center text-align-center ">
            PROJECT CONSULTANCY
          </div>
          <div className="our-service-e-commerce-container">
            We help make your idea a reality.
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={LightBulb}
          title=" PROJECT CONSULTANCY"
          desc={<>We help make your idea a reality.</>}
        />
        {/* 4th child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Stastic} className="desktop-img" />
          </div>
          <div className="our-service-business-intelligence d-flex justify-content-center text-align-center ">
            BUSINESS INTELLIGENCE
          </div>
          <div className="our-service-e-commerce-container">
            Bring your data to life, make
            <br /> calculated decisions and increase <br /> profits in your
            business
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Stastic}
          title=" BUSINESS INTELLIGENCE"
          desc={
            <>
              Bring your data to life, make
              <br /> calculated decisions and increase <br /> profits in your
              business
            </>
          }
        />
        {/* 5th child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Earth} className="desktop-img" />
          </div>
          <div className="our-service-web-application d-flex justify-content-center text-align-center ">
            WEBSITE DEVELOPMENT
          </div>
          <div className="our-service-e-commerce-container">
            Great corporate Websites for your
            <br />
            organization, giving the right impact <br /> on your customers
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Earth}
          title=" WEBSITE DEVELOPMENT"
          desc={
            <>
              Great corporate Websites for your
              <br />
              organization, giving the right impact <br /> on your customers
            </>
          }
        />
        {/* 6th child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Cloud} className="desktop-img" />
          </div>
          <div className="our-service-cloud-application d-flex justify-content-center text-align-center ">
            CLOUD-BASED <br />
            APPLICATIONS
          </div>
          <div className="our-service-e-commerce-container">
            Cloud-based Application
            <br /> development helps you provide <br /> Software as a Service
            (SaaS)
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Cloud}
          title=" CLOUD-BASED 
          APPLICATIONS"
          desc={
            <>
              Cloud-based Application
              <br /> development helps you provide <br /> Software as a Service
              (SaaS)
            </>
          }
        />
        {/* 7th child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Settings} className="desktop-img" />
          </div>
          <div className="our-service-web-application d-flex justify-content-center text-align-center ">
            SOFTWARE
            <br />
            DEVELOPMENT
          </div>
          <div className="our-service-e-commerce-container">
            Customized Software Application
            <br /> Development for windows based
            <br /> applications
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Settings}
          title=" SOFTWARE
          DEVELOPMENTS"
          desc={
            <>
              Customized Software Application
              <br /> Development for windows based
              <br /> applications
            </>
          }
        />
        {/* 8th child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Bug} className="desktop-img" />
          </div>
          <div className="our-service-maintenance-support d-flex justify-content-center text-align-center ">
            MAINTENANCE &<br />
            SUPPORT
          </div>
          <div className="our-service-e-commerce-container">
            Provide us your legacy applications
            <br /> and we will make it up to date
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Bug}
          title="  MAINTENANCE &
          SUPPORT"
          desc={
            <>
              Provide us your legacy applications
              <br /> and we will make it up to date
            </>
          }
        />
        {/* 9th child */}
        {/* <div className="our-service-web-application-parent-container d-flex flex-column justify-content-center align-items-center ">
          <div className="our-service-circle-desktop-container rounded-circle d-flex justify-content-center align-items-center">
            <img src={Epbx} className="desktop-img" />
          </div>
          <div className="our-service-web-application d-flex justify-content-center text-align-center ">
            EPBX
          </div>
          <div className="our-service-e-commerce-container">
            Stay in connect with you colleges
            <br /> anywhere anytime on your own
            <br /> private EPBX network.
          </div>
        </div> */}
        <OurServiceItem
          imgSrc={Epbx}
          title="  EPBX"
          desc={
            <>
              Stay in connect with you colleges
              <br /> anywhere anytime on your own
              <br /> private EPBX network.
            </>
          }
        />
      </div>
    </div>
  );
}

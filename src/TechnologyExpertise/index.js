import React from "react";
import "./style.css";
import Processor from "../assets/images/processor.svg";
import Html from "../assets/images/html.svg";
import Android from "../assets/images/android.svg";
import Apple from "../assets/images/apple.svg";
import Php from "../assets/images/php.svg";
import Rfid from "../assets/images/rfid.svg";
import Statistic from "../assets/images/statistics.svg";
import Database from "../assets/images/database.svg";
import Asteric from "../assets/images/asterisk.svg";
import TechnologyItem from "../TechComponents";
export default function TechnologyExpertise() {
  return (
    <div className="technology-expertise-main-container d-flex justify-content-center align-items-center flex-column p-5">
      <div className="technology-expertise-text-container fw-bold mb-1 ">
        TECHNOLOGY EXPERTISE
      </div>
      <div className="technology-underlne  "></div>
      <div className="technology-expertise-different-section-parent-container d-flex flex-wrap justify-content-center">
        <TechnologyItem
          imgSrc={Processor}
          title="Computing"
          desc={
            <>
              Python, Nodejs, Message Broker <br />
              RabbitMQ, Amazon Wen Services etc.
            </>
          }
        />
        <TechnologyItem
          imgSrc={Html}
          title="WEB TECHNOLOGIES"
          desc={
            <>
              HTML5, CSS3, Ajax, Web Services,
              <br />
              Reactjs, Redux etc.
            </>
          }
        />

        <TechnologyItem
          imgSrc={Android}
          title="Android"
          desc={
            <>
              Get the most out of your Android
              <br /> App with multi-device <br />
              multi-screen support.
            </>
          }
        />

        <TechnologyItem
          imgSrc={Apple}
          title="Apple"
          desc={<>OS App for iPhone, iPad and iPod</>}
        />

        <TechnologyItem
          imgSrc={Php}
          title="PHP & CMS"
          desc={
            <>
              Powerful mobile responsive PHP websites and CMS web applications
              based on Drupal, Joomla, Wordpress, Magento
            </>
          }
        />
        <TechnologyItem
          imgSrc={Rfid}
          title="SMART CARDS RFID & BIOMETRICS"
          desc={
            <>
              SCOSTA Card, Contact/Contctless Smart Card, Biometrics, Java Card,
              RFID, Mifare, Magnetic Stripe, Memory Card or NFC Tags
            </>
          }
        />
        <TechnologyItem
          imgSrc={Database}
          title="DATABASE TECHNOLOGIES"
          desc={
            <>
              MS SQL Server, MySQL, SQLite, Oracle, MS Access, NoSQL, MongoDB,
              FireStore, DynamoDB etc
            </>
          }
        />
        <TechnologyItem
          imgSrc={Statistic}
          title="BUSINESS INTELLIGENCE"
          desc={
            <>
              MS SQL Server, MySQL, SQLite, Oracle, MS Access, NoSQL, MongoDB,
              FireStore, DynamoDB etc
            </>
          }
        />

        <TechnologyItem
          imgSrc={Asteric}
          title="Asterisk"
          desc={
            <>
              Asterisk powers IP PBX systems, VoIP gateways, conference servers,
              and is used by SMBs, enterprises, call centers, carriers and
              governments worldwide.
            </>
          }
        />
      </div>
    </div>
  );
}

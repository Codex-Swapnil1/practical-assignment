import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import "../styles/footerComponent.css";
const FooterComponent = () => {
  return (
    <>
      <div className="footer_top">
        <div>
          <h4>FOLLOW US  <span style={{fontSize:"8px"}}>◣</span></h4>
          <div className="social_media_logo">
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaTelegramPlane />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
          <div>
            <span className="globe_logo">
              <CiGlobe />
            </span>
            https://company.com
          </div>
        </div>
        <div>
          <h4>OUR SERVICES <span style={{fontSize:"8px"}}>◣</span></h4>
          <div id="our_service_box">
            <div>
              <ul className="services_list">
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
            </div>
            <div>
              <ul className="services_list">
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="getin_touch_box">
          <h4>GET IN TOUCH  <span style={{fontSize:"8px"}}>◣</span></h4>
          <div style={{display:"flex",gap:"4px",marginBottom:"10px"}}>
            <div>
              <span>
                <CiLocationOn />
              </span>
            </div>
            <div>
              Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
              Bangalore-560016
            </div>
          </div>
          <hr />
          <div style={{marginTop:"20px"}}>
            <div className="footer_contact_box">
              {" "}
              <span>
                <ImMobile />
              </span>{" "}
              +91 12345 67890
            </div>
            <div className="footer_contact_box">
              {" "}
              <span>
                <TfiEmail />
              </span>{" "}
              info@company.com
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="copyright">
          <div>Copyright © 2023, iAssureIT All Rights Reserved </div>
          <div>
            {" "}
            <span style={{ color: "#e2eaf6" }}>
              Designed & Developed By
            </span>{" "}
            <span style={{ fontWeight: "bold" }}>
              iAssure International Technologies Pvt. Ltd.
            </span>{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;

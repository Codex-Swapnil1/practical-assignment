import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import "../styles/footerComponent.css"
const FooterComponent = () => {
  return (
    <>
        <div>
        <div>
          <h4>FOLLOW US</h4>
          <div>
            <span><FaLinkedinIn /></span>
            <span><FaTelegramPlane /></span>
            <span><FaTwitter /></span>
          </div>
          <div>
            <span><CiGlobe /> https://company.com</span>
          </div>
        </div>
        <div>

          <h4>OUR SERVICES</h4>
          <div>
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
        <div>
          <h4>GET IN TOUCH</h4>
          <div>
            <span><CiLocationOn /></span>
          Akshya Nagar 1st Block 1st Cross,
Rammurthy Nagar,
Bangalore-560016
          </div>
          <hr/>
          <div>
          <div>
          {" "}
          <span>
            <ImMobile />
          </span>{" "}
          +91 12345 67890
        </div>
        <div>
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
  )
}

export default FooterComponent
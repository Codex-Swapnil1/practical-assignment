import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";
import "../styles/topComponent.css"

const TopComponents = () => {
  return (
    <>
    <div className="topside">
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
  <div className="navbar">
    <div><h1 id="logo">LOGO</h1></div>
    <div>
      <ul className="navbar-section-list">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>SERVICES</li>
        <li>TESTIMONIALS</li>
        <li>BLOGS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </div></>
  )
}

export default TopComponents
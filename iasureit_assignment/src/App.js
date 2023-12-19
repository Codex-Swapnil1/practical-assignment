import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";

function App() {
  return (
    <div className="App">
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
        <div><h2 id="logo">LOGO</h2></div>
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
      </div>
      <div className="contact_us"></div>
      <iframe
        id="map-canvas"
        class="map_part"
        width="100%"
        height="340"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=1B, 2nd, BUILDING-B3, CEREBRUM IT PARK, Marigold complex, Kalyani Nagar, Pune, Maharashtra 411014&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        Powered by{" "}
        <a href="https://embedgooglemaps.com">
          how to embed google maps generator
        </a>{" "}
        and{" "}
        <a href="https://yatzyregler.com/maxi-yatzy-regler/">
          Maxi Yatzy regler
        </a>
      </iframe>
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
    </div>
  );
}

export default App;

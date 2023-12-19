import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";

function App() {
  return (
    <div className="App">
      <div className='topside'>
        <span><ImMobile/> +91 12345 67890</span>
        <span> <TfiEmail /> info@company.com</span>
      </div>
      <div className='navbar'>
            <div>LOGO</div>
            <div>
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>TESTIMONIALS</li>
                <li>BLOGS</li>
                <li>CONTACT</li>
              </ul>
            </div>
      </div>
      <div className='contact_us'>

      </div>
      <iframe id="map-canvas" class="map_part" width="100%"  height="350"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=1B, 2nd, BUILDING-B3, CEREBRUM IT PARK, Marigold complex, Kalyani Nagar, Pune, Maharashtra 411014&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://embedgooglemaps.com">how to embed google maps generator</a> and <a href="https://yatzyregler.com/maxi-yatzy-regler/">Maxi Yatzy regler</a></iframe>
    </div>
  );
}

export default App;

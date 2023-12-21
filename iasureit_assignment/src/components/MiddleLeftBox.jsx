import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { ImMobile } from "react-icons/im";
import { CiGlobe } from "react-icons/ci";
const MiddleLeftBox = () => {
  return (
    <div className='middleLeftBox'>
        <h1>
            Let's Start <br/>
            Something Great!
        </h1>
        <p>
            Proactively customize cross-media schemas rather than high-payoff the customer service. Uniquely enable extensible niche.
        </p>
        <div>
            <div className='middle_detail_container'>
                <div className='middle_logo'>
                    <span>
                        <CiGlobe/>
                    </span>
                </div>
                <div>Akshya Nagar 1st Block 1st Cross,<br/>
Rammurthy Nagar,<br/>
Bangalore-560016</div>
            </div>
            <div className='middle_detail_container'>
            <div className='middle_logo'>
                <span><ImMobile/> </span>
            </div>
            <div>+91 12345 67890</div>
            </div>
            <div className='middle_detail_container'>
            <div className='middle_logo'>
                <span><TfiEmail/></span>
            </div>
            <div>info@company.com</div>
            </div>
        </div>
    </div>
  )
}

export default MiddleLeftBox
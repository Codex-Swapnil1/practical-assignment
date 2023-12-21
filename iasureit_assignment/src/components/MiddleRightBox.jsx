import React from 'react'
import { RiEditLine } from "react-icons/ri";
import { IoPricetagOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";

const MiddleRightBox = () => {

  return (
    <div>
      <form className='middle_contact_box'>
        <h2>Need Help?</h2>
        <p style={{fontSize:"13px"}}>
          Proactively fashion world-class leadership vis-a-vis
          enterprise e-services. Great strong leadership.
        </p>
        <div className='input_design'>
          <span><FaRegUser /></span>
          <input type='text' placeholder="Name"/>
        </div>
        <div className='input_design'>
        <span><TfiEmail/></span>
          <input type='email' placeholder='Email'/>
        </div>
        <div className='input_design'>
        <span><IoPricetagOutline/></span>
          <input type='text' placeholder='Subject'/>
        </div>
        <div className='input_design'>
          <span style={{position:"relative", bottom:"70px"}}><RiEditLine/></span>
          <textarea placeholder='Your Message'></textarea>
        </div>
        <div className='input_design' style={{backgroundColor:"white"}}>
        <input type='submit' value="SEND ENQUIRY" style={{color:"#333333", fontWeight:"bolder", backgroundColor:"white"}}/>
        </div>

      </form>
    </div>
  )
}

export default MiddleRightBox
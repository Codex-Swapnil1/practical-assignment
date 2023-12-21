import React from 'react'
import MiddleLeftBox from './MiddleLeftBox'
import MiddleRightBox from './MiddleRightBox'
import "../styles/middleContainer.css"

const MiddleContainer = () => {
  return (
    <div className='middle_container'>
        <MiddleLeftBox/>
        <MiddleRightBox/>
    </div>
  )
}

export default MiddleContainer
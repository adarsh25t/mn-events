import React from 'react'
import userline from '../../images/userline.png'



const Title = ({title,title2}) => {
  return (
    <div className='title-wrapper'>
      <h3>{title} <span>{title2}</span></h3>
      <img src={userline} alt="underline" />
    </div> 
  )
}

export default Title

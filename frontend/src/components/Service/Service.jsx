import React from 'react'
import Title from '../Common/Title'
import servicelog from '../../images/event-logo.png'
import service1 from '../../images/s1.png'
import service2 from '../../images/s2.png'
import service3 from '../../images/s3.png'
import service4 from '../../images/s4.png'

const Service = () => {
  return (
    <>
        <Title title='Our' title2='Service'/>
        <div className="container">
            <div className="row service-wrapper">
                <div className="col-md-6 service-contents">
                    <img src={servicelog} alt="service-logo" />
                    <h3>Let’s Plan Your Next Event Together</h3>
                    <button className='button-59'>Learn More</button>
                </div>
                <div className="col-md-6 ">
                    <div className="service-image-wrapper">
                        <div className="">
                            <img src={service1} alt="service-1" />
                            <h5>Metal Circles & Flowers</h5>
                        </div>
                        <div className="">
                            <img src={service2} alt="service-2" />
                            <h5>Tables</h5>
                        </div>
                        <div className="">
                            <img src={service3} alt="service-3" />
                            <h5>Wedding Walls</h5>
                        </div>
                        <div className="">
                            <img src={service4} alt="service-4" />
                            <h5>Chairs</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service

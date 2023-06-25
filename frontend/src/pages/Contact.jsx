import React from 'react'
import ContactForm from '../components/Common/ContactForm'

const Contact = () => {
  return (
    <div className='container-fluid'>
        <div className="row contact-form-div">
            <div className="col-md-6 contact-image-div">
                <img src="https://html.designingmedia.com/bridely/assets/images/form-section-img1.png" alt="contact" className='contact-form-img'/>
            </div>
            <div className="col-md-6 contact-image-div">
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact

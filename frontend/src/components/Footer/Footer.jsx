import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className="footer-div">
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 footer-wrapper">
                        <h3>NM Events</h3>
                        <p>FEROKE,CALICUT</p>
                        <p>Birthday party,Wedding,Housewarming,Haldi,Lights Work,Engagement, Stage Decoration</p>
                        <div className='footer-icons'>
                            <FacebookIcon className='footer-icon'/>
                            <InstagramIcon className='footer-icon'/>
                            <TwitterIcon className='footer-icon'/>
                            <GoogleIcon className='footer-icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-copy-wrapper'>
                <p className='footer-copy-right'>Copyright {new Date().getFullYear()} <Link to={'/'}>nmeventsferoke.in</Link> All Rights Reserved</p>
            </div>
        </div>
    </>
  )
}

export default Footer

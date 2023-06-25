import React, { Component,useEffect } from 'react';
import { motion, useAnimation} from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../images/slide1.jpg'
import slide2 from '../../images/slide2.jpg'
import slide3 from '../../images/slide3.jpg'
import { useInView } from 'react-intersection-observer';

const Slider = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        control.start("show");
        } else {
        control.start("hidden");
        }
    }, [control, inView]);


    return (
        <Carousel className='slider_wrapper' 
            showArrows={false} 
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={2500}
            transitionTime={1000}
        >
            <div>
                <div className="centered-text">
                    <h2 className='title_1'>Trends Come & Go. Style Lasts</h2>
                    <p className='title_2'>Forever.</p>
                    <button className='button-48 slider-btn'>PLAN MY WEDDING </button>
                </div>
                <img src={slide1} alt='image1'/>
            </div>
            <div>
                <div className="centered-text">
                    <h2 className='title_1'>Bespoke Weddings & </h2>
                    <p className='title_2'>Ceremonies .</p>
                    <button className='button-48 slider-btn'>PLAN MY WEDDING </button>
                </div>
                <img src={slide2} alt='image2'/>
            </div>
            <div>
                <div className="centered-text">
                    <h2 className='title_1'>Dream Locations In </h2>
                    <p className='title_2'>Greece.</p>
                    <button className='button-48 slider-btn'>PLAN MY WEDDING </button>
                </div>
                <img src={slide3} alt='image3'/>
            </div>
            
        </Carousel>
    );
}

export default Slider
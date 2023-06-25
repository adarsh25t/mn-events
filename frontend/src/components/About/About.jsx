import React, { useEffect } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion, useAnimation,AnimatePresence} from "framer-motion"
import aboutimage1 from '../../images/about-img1.png'
import aboutimage2 from '../../images/about-img2.png'
import aboutimage3 from '../../images/about-img3.png'
import aboutbird from '../../images/about_bird.png'
import Title from '../Common/Title';
import { useInView } from 'react-intersection-observer';


const content = {
  hidden: { opacity: 0 },
  show: {
    opacity: [1],
    transition: {
      duration: 1.5
    }
  }
}
const image1 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale:1,
    transition: {
      duration: 1.5,
      delay:.5
    }
  }
}
const image2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale:1,
    transition: {
      duration: 1.5,
      delay:1
    }
  }
}
const image3 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale:1,
    transition: {
      duration: 1.5,
      delay:1.3
    }
  }
}


const About = () => {

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
    <>
      <Title title={"About"} title2={'Us'}/>
      <div className='container'>
        <div className='row about-div'>
            <motion.div className='col-md-6 about-description'
              // variants={content} 
              // initial={content.hidden}
              // animate={control}
              // ref={ref}
            >
              <h4 className='about_title_1'>Who We Are</h4>
              <h3 className='about_title_2'>Planner for Your Perfect Wedding</h3>
              <p className='about_title_3'>
                  NM Events is a renowned event management company with over 20 years of experience. With expertise in dance and event management, we have successfully organized 500+ memorable events. Our commitment to precision, simplicity, and hard work sets us apart. We aim to exceed customer expectations, earning their trust through exceptional creativity, innovation, and flawless execution. Let us transform your event into an extraordinary experience.
              </p>
  
              <button className='button-59 about-learnmore'>Learn More</button>
            </motion.div>
            <div className='col-md-6 about-image-div'>
                <motion.img src={aboutbird} alt='about_bird' className='about-bird-img'/>
                
                <div className='about-image-wrapper'>
                  <div>
                    <motion.img 
                      src={aboutimage1} 
                      alt='about_img' 
                      className='about-1f-img'
                      variants={image1} 
                      initial={image1.hidden}
                      animate={control}
                      ref={ref}
                    />
                  </div>
                  <div className='about-image-2-wrapper'>
                    <motion.img 
                      src={aboutimage2} 
                      alt='about_img' 
                      className='about-1-img'
                      variants={image2} 
                      initial={image2.hidden}
                      animate={control}
                      ref={ref}
                    />
                    <motion.img 
                      src={aboutimage3} 
                      alt='about_img' 
                      className='about-2-img'
                      variants={image3} 
                      initial={image3.hidden}
                      animate={control}
                      ref={ref}
                    />
                  </div>
                </div>
            </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default About

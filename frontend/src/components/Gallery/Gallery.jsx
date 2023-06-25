import React from 'react'
import Title from '../Common/Title';
import g1 from '../../images/g1.jpg'
import g2 from '../../images/g2.jpg'
import g3 from '../../images/g3.jpg'
import g4 from '../../images/g4.jpg'
import g5 from '../../images/g5.jpg'
import { Link } from 'react-router-dom';


const Gallery = () => {
  return (
    <>
        <Title title={"Our"} title2={'Gallery'}/>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='gallery_wrapper'>
                        <div className='gallery1'>
                            <section className='gallery-shadow'></section>
                            <img src={g1} alt='gallery1' />
                        </div>
                        <div className='gallery2'>
                            <section className='gallery-shadow'></section>
                            <img src={g2} alt='gallery1' />
                        </div>
                        <div className='gallery3'>
                            <section className='gallery-shadow'></section>
                            <img src={g3} alt='gallery1' />
                        </div>
                        <div className='gallery4'>
                            <section className='gallery-shadow'></section>
                            <img src={g4} alt='gallery1' />
                        </div>
                        <div className='gallery5'>
                            <section className='gallery-shadow'></section>
                            <img src={g5} alt='gallery1' />
                        </div>
                    </div>
                </div>
                <div className='col-md-12 gallery-button-wrapper'>
                    <Link to={'/gallery'}><button className='button-59 gallery-button'>DISCOVER MORE</button></Link>
                </div>
            </div>
            
        </div>  
    </>
  )
}

export default Gallery

import React from 'react'
import Slider from '../components/Slider/Slider';
import About from '../components/About/About';
import Service from '../components/Service/Service';
import Products from '../components/Products/Products';
import Gallery from '../components/Gallery/Gallery';

const Home = () => {
  return (
    <main>
        <Slider/>
        <About/>
        <Service/>
        <Products/>
        <Gallery/>
      </main>
  )
}

export default Home

import React from 'react'
import { motion } from "framer-motion"
import logo from '../images/logo2.png'

const varients = {
    initial:{
        opacity: 0,
        scale: 0
    },
    animate:{
        opacity: 1,
        scale: 1,
        transition:{
            duration: 2
        }   
    }
}


const LoadingPage = () => {
  return (
    <div className='container-fluid loading-page'>
        <motion.img 
            src={logo} 
            alt="loading" 
            variants={varients}
            initial='initial'
            animate='animate'
        />
        <div class="loading">
            <div class="bounceball"></div>
            <div class="text">LOADING...</div>
        </div>
    </div>
  )
}

export default LoadingPage

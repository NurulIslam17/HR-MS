import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FaqContent from '../components/FaqContent'


function Fqa() {
  return (
    <>
      <Navbar/>
      <Hero page="FAQ"/>
      <FaqContent/>
      <Footer/>
      
    </>
  )
}

export default Fqa
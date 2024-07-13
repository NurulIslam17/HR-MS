import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FaqDetailsCont from '../components/FaqDetailsCont'

function FaqDetails() {
  return (
    <>
      <Navbar/>
      <Hero page="FAQ Details"/>
      <FaqDetailsCont/>
      <Footer/>
    </>
  )
}

export default FaqDetails
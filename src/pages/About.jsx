import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <>
      <Navbar/>
      <Hero page="About"/>
      <AboutContent/>
      <Footer/>
    </>
  )
}

export default About
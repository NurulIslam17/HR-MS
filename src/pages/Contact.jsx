import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactCon from '../components/ContactCon'

function Contact() {
  return (
    <>
      <Navbar/>
      <Hero page="Contact"/>
      <ContactCon/>
      <Footer/>
    </>
  )
}

export default Contact
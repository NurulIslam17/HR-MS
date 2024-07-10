import React from 'react'
import '../asset/css/style.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeComtent from '../components/HomeComtent'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero page="Home"/>
      <HomeComtent/>
      <Footer/>
    </>
  )
}

export default Home
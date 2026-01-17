import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardSection from './components/card/CardSection'

const Sections = () => {
  return (
     <div className=' min-h-screen w-full
  bg-[radial-gradient(ellipse_at_40%_5%,_#144C3E_0%,_#0c0c0c_35%)]'>
    <Navbar/>
      <Hero/>
<CardSection/>


    </div>
  )
}

export default Sections
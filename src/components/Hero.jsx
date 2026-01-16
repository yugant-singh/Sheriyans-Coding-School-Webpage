import React from 'react'
import HeroText from './HeroText'
import Button from './Button'
import GetReady from './GetReady'
import RecordList from './RecordList'

const Hero = () => {
  return (
    <section className='h-full w-full text-white flex items-center gap-5 justify-center flex-col mt-7 p-4'>
      <HeroText />
      <Button text="Check Courses-Make an Impact" />
      <RecordList />

    </section>
  )
}

export default Hero
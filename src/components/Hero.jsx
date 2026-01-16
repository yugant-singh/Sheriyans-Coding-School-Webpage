import React from 'react'
import HeroText from '../HeroText'
import Button from './Button'
import GetReady from './GetReady'
import RecordList from './RecordList'

const Hero = () => {
  return (
    <section className='h-full w-full flex items-center justify-center flex-col'>
<HeroText/>
<Button text="Check Courses-Make an Impact"/>
<RecordList/>

    </section>
  )
}

export default Hero
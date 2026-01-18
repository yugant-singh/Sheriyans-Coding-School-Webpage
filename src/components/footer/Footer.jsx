import React from 'react'
import Social from './Social'
import Company from '../section3/Company'
import Companyy from './Companyy'
import Community from './Community'
import GetInTouch from './GetInTouch'

const Footer = () => {
  return (
    <div className='text-white  h-full w-full bg-[#0C0C0C] flex items-center justify-between p-14'>
    <Social/>
    <Companyy/>
    <Community/>
    <GetInTouch/>
    </div>
  )
}

export default Footer
import React from 'react'
import Content from './Content'
import Company from './Company'
import Button from '../Button'

const Section3 = () => {
  return (
    <div className='text-white text-3xl bg-[#0D1311] flex flex-col gap-6 mt-10 p-7 items-center '>
    <Content/>
    <Company/>
    <Button text="Explore Courses"/>
    </div>
  )
}

export default Section3
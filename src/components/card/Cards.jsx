import React from 'react'
import Card from './Card'
import CardButton from './CardButton'

const Cards = () => {
  return (
    <div className='text-white font-[HalveticaLigh] p-5 flex flex-col gap-6' >
        <Card/>
       <CardButton/>
    </div>
  )
}

export default Cards
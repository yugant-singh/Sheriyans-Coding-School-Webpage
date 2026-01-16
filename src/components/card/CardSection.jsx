import React from 'react'


import Cards from './Cards'


const CardSection = () => {
  return (
   <section className='text-white font-[HalveticaLigh] p-5 flex flex-wrap justify-between gap-1'>
    
   <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
   </section>
  )
}

export default CardSection
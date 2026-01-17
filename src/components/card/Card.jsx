import React from 'react'
import Batch from './Batch'

const Card = (props) => {

  

  
  return (
    <div className='w-92 h-[450px] bg-[#171717] rounded-xl flex flex-col gap-3  overflow-hidden '> 
        <div className='w-full overflow-hidden '>
            <img className='h-full w-full object-cover ' src={props.course.imgUrl} alt="" />
        </div>
       <div className='p-4 opacity-90 flex gap-2 flex-col'>
         <h4 className='text-2xl font-light'>{props.course.title}</h4>
        <div className='px-3 py-1 w-fit bg-[#2C2C2C]'><p className='uppercase rounded-sm'>{props.course.language}</p></div>
       </div>
        <Batch course={props.course}  />
    </div>
  )
}

export default Card
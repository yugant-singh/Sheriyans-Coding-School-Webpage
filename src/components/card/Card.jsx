import React from 'react'
import Batch from './Batch'

const Card = () => {
  return (
    <div className='w-92 bg-[#171717] rounded-xl flex flex-col gap-1.5 overflow-hidden '> 
        <div className='w-full overflow-hidden '>
            <img className='h-full w-full object-cover ' src="https://ik.imagekit.io/sheryians/courses_gif/undefined-web-dsa-thumb-10_ZKtPNgmW_.webp_Zhu2w1to5h.jpeg" alt="" />
        </div>
       <div className='p-4 opacity-90 flex gap-2 flex-col'>
         <h4 className='text-2xl font-light'>Data Science and Analytice With  GenAI</h4>
        <div className='px-3 py-1 w-fit bg-[#2C2C2C]'><p className='uppercase rounded-sm'>Hinglish</p></div>
       </div>
        <Batch/>
    </div>
  )
}

export default Card
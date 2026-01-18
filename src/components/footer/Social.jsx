import React from 'react'
import Links from './Links'

const Social = () => {
  return (
    <div  className='flex  gap-5 flex-col'>
        <div className='w-10 h-10'>
                <img className='h-full w-full object-cover' src="https://ik.imagekit.io/sheryians/light-logo_lNzGXRRlQ.png" alt="" />
            </div>
            <p>Let's connect with our socials</p>
           <Links/>
    </div>
  )
}

export default Social
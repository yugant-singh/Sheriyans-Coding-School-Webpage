import React from 'react'

const Button = (props) => {
    console.log(props);
    
  return (
    
    <button className='text-2xl  font-semibold  bg-[#24CFA6]  rounded-xl px-7 text-center py-1.5 text-black' >{props.text}</button>

    
  )
}

export default Button
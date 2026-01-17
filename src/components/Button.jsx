import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardSection from './card/CardSection'

const Button = (props) => {
  let navigate = useNavigate()
   
  return (
    
    <button onClick={()=>{
      navigate('/course')
      console.log("Btn clicked");
      
      
    }} className='text-2xl pointer font-semibold cursor-pointer bg-[#24CFA6]  rounded-xl px-7 text-center py-1.5 text-black' >{props.text}</button>

    
  )
}

export default Button
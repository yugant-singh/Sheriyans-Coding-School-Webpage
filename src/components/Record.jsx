import React from 'react'

const Record = (props) => {

  return (
    <div className=' h-25 w-[20%] p-4  flex flex-col gap-2 items-center justify-center'>
        <h4 className='text-2xl font-[Halveticaa] font-bold' >{props.data>99?props.data+"K":props.data+"+"}</h4>
        <p className='text-xl font-[Halveticaa] ' >{props.text}</p>
    </div>
  )
}

export default Record
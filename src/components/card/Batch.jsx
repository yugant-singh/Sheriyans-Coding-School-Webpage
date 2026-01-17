import React from 'react'

const Batch = (props) => {
    
    
    
    
    return (
        <div className='p-4 flex  justify-between'>
            <div className='flex flex-col '>
                <span className='text-emerald-600 capitalize text-md'>{props.course.discountLabel}</span>
                <h4 className='text-2xl'>रु{props.course.price}</h4>    
            </div>
            <div>
                <span className='bg-white text-black uppercase px-3  text-sm py-1 rounded-sm font-medium'>{props.course. discountPercent}%</span>
            </div>
        </div>
    )
}

export default Batch
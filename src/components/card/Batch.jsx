import React from 'react'

const Batch = () => {
    return (
        <div className='p-4 flex  justify-between'>
            <div className='flex flex-col '>
                <span className='text-emerald-600 capitalize text-md'>Limited Time Discount</span>
                <h4 className='text-2xl'>$6999</h4>    
            </div>
            <div>
                <span className='bg-white text-black uppercase px-3  text-sm py-1 rounded-sm font-medium'>53% OFF</span>
            </div>
        </div>
    )
}

export default Batch
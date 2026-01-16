import React from 'react'
import Record from './Record'

const RecordList = () => {
    return (
        <div className='w-full h-50 flex p-8 gap-2.5  items-center justify-center '>
            <Record data={250} text="Students taught" />
            <Record  data={20} text="Insrtuctors"/>
            <Record data={621} text="Youtube Subs." />
        </div>
    )
}

export default RecordList
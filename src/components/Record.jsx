import React from 'react'

const Record = (props) => {

  return (
    <div className='record'>
        <h4>{props.data>99?props.data+"K":props.data+"+"}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default Record
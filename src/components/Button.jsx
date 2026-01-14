import React from 'react'

const Button = (props) => {
    console.log(props);
    
  return (
    
    <div><button>{props.text}</button>

      </div>
  )
}

export default Button
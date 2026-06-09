import React from 'react'

const Button = ({title, className}) => {
  return (
   <>
 <button className={`btn ${className}`}>{title}</button>
   </>
  )
}

export default Button
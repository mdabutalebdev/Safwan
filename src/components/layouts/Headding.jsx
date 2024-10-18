import React from 'react'

const Headding = ({text, className}) => {
  return (
    <h3 className={(`text-PrimaryColor font-Vollkorn font-medium ${className}`)}>{text}</h3>
  )
}

export default Headding
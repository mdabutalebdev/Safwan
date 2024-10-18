
import React from 'react'

function Button({ className, text }) {
  return (

    <button className={(`bg-ButtonBg text-primary rounded-xs px-4 py-1 border-[1px] border-white outline outline-[7px] outline-ButtonBg text-white ${className}`)}>{text}</button>

  )
}

export default Button



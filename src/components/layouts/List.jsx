import React from 'react'

const List = ({ text, className, href, onClick }) => {
  return (
    <li onClick={onClick}>
      <a href={href} className={`text-PrimaryColor font-Jost font-medium text-lg  duration-500 cursor-pointer ${className}`}>
        {text}
      </a>
    </li>
  )
}

export default List
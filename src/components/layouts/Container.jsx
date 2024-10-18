import React from 'react'

const Container = ({Children, className}) => {
  return (
    <div className={(`w-[1170px] mx-auto ${className}`)}>{Children}</div>
  )
}

export default Container


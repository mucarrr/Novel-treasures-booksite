import React from 'react'

const Info = ({title, value}) => {
  return (
  <p className='fs-4'>
      <span className='badge bg-danger mx-4'>{title}</span>
      <span>{value}</span>
  </p>
  )
}

export default Info
import React from 'react'
import {Link} from "react-router-dom"
const NotFound = () => {
  return (
    <div className='text-center container mx-auto p-5 d-flex flex-column gap-4 justify-content-center align-items-center'>
        <h1 className='fs-3'>No Matching Result! Please go to <Link to="/"><span className='fw-bolder'>Home Page</span></Link></h1>
        <img className='w-50 rounded' src="/book-with-broken-pages-animation-404-error.gif" alt="" />
        
    </div>
  )
}

export default NotFound
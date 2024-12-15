import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({book}) => {
    
  return (
    <div className="card shadow p-2">
        <img src={book.image} alt="" className='rounded' />
        <div className="card-body">
            <h4>{book.title}</h4>
            <h4>{book.author}</h4>
        </div>
        <Link className="btn btn-primary w-100" to={`/Details/${book.id}`}>See Details</Link>

    </div>
  )
}

export default Card
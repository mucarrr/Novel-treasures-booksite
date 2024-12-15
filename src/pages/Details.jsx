import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Info from '../components/Info'


const Details = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const [ book, setBook] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:3030/books/${id}`).then((res)=> setBook(res.data)).catch((err)=>{navigate("/notfound")});
  },[]);
  console.log(book);
  
  return (
    <div className='row my-5 p-5 mx-auto container'>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img src={book.image} alt="" className='rounded img-fluid shadow w-75' />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-4">
        <h1 className='fw-bold'>{book.title}</h1>
        <div className='my-4'>
          <Info title="Author" value={book.author}/>
          <Info title="Year" value={book.year}/>
          <Info title="Page Number" value={book.page}/>
          <Info title="Price" value={book.price}/>
          <Info title="Decription" value={book.description}/>
        </div>
      </div>
    </div>
  )
}

export default Details
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios from 'axios';
import Card from "../components/Card";
import { useNavigate, useSearchParams } from "react-router-dom";



const Products = () => {
  const navigate = useNavigate()
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();
  const params = {
    q: searchParams.get("search"),
    _sort: "title",
    _order: searchParams.get("sort") ==="z-a" ?"desc" : "asc",
  }
  useEffect(() => {
    axios.get("http://localhost:3030/books", {params})
    .then((res)=>setBooks(res.data));
  }, [searchParams]);
  
  
  
  
  return (
    <section className="container my-5">
      {books.length === 0 ?  (<h3 className="p-3 rounded fs-4 w-75">The book you are looking for was not found!</h3 >) : 
      (<h3 className="p-3 rounded fs-4 w-75">{books.length} matching results</h3>)}
      <Filter />
      <div className="cards-container">
      { books.map((book)=> 
      < Card key={book.id}
             book={book}/>)}
      </div>
    </section>
  );
};

export default Products;

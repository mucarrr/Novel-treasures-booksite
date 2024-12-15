import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const text = e.target[0].value; 
       searchParams.set("search", text);
       setSearchParams(searchParams);
    }
    const handleChange =(e)=>{
        const text = e.target.value;
        searchParams.set("sort", text);
       setSearchParams(searchParams);
        
    };
   
  return (
   <div className='d-flex justify-content-between align-items-center my-4 gap-3'>
    <div>
        <select onChange={handleChange} className='form-select border-2'>
            <option value="">Sort</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
        </select>
    </div>
    <form onSubmit={handleSubmit} className='d-flex gap-2'>
        <input type="text" className='form-control border-2' placeholder="Write the book name.." />
        <button type='submit' className='btn btn-primary'>Search</button>
    </form>
   </div>
  )
}

export default Filter
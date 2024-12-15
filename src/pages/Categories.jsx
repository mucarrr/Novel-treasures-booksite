import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='d-flex align-items-center gap-4 p-5'>
      <aside className='d-flex flex-column bg-white p-5 rounded-4'>
        <NavLink to="/Categories/populars">Popular Novels </NavLink>
        <NavLink to="/Categories/bestsellers">Best Sellers</NavLink>
        <NavLink to="/Categories/romantics">Romantics</NavLink>
      </aside>
    <Outlet/>
    </div>
  )
}

export default Categories
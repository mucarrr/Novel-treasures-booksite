
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='navbar'>
    <div className="container d-flex justify-content-around">
    <span className=' fs-2 fw-bold'>Novel Treasures</span>
    <nav className='d-flex gap-4'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Products">Products</NavLink>
    <NavLink to="/Categories">Categories</NavLink>
    </nav>
    </div>
    </header>
    
  )
}

export default Header;
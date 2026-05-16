import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='navbar'>
      <div className='navbar-left'>
        <div className='logo'>
          Campus<span>Market</span>
        </div>

        <div className='search-box'>
          <input type='text' placeholder='Search products...' />
          <button>Search</button>
        </div>
      </div>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/marketplace'>Marketplace</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/login'>Login</Link>
      </div>
    </header>
  )
}

export default Navbar
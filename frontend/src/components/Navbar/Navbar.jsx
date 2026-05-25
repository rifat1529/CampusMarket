import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem('currentUser')
  )

  const handleLogout = () => {
    localStorage.removeItem('currentUser')

    navigate('/login')
  }

  return (
    <header className='navbar'>
      <div className='navbar-left'>
        <div className='logo'>
          Campus<span>Market</span>
        </div>

        <div className='search-box'>
          <input
            type='text'
            placeholder='Search products...'
          />

          <button>Search</button>
        </div>
      </div>

      <div className='nav-links'>
        <Link to='/'>Home</Link>

        <Link to='/marketplace'>
          Marketplace
        </Link>

        {user?.role !== 'seller' && (
          <>
            <Link to='/cart'>Cart</Link>
            <Link to='/orders'>Orders</Link>
          </>
        )}

        {!user ? (
          <>
            <Link to='/login'>Login</Link>

            {/* <Link to='/register'>
              Register
            </Link> */}
          </>
        ) : (
          <>
            {user.role === 'seller' ? (
              <Link to='/seller-dashboard'>
                Dashboard
              </Link>
            ) : (
              <span className='user-name'>
                {user.name}
              </span>
            )}

            <button
              className='logout-btn'
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
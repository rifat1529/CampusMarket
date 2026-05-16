import './SellerCard.css'
import { Link } from 'react-router-dom'

function SellerCard({ seller }) {
  return (
    <Link to={`/shop/${seller.id}`}>
      <div className='seller-card'>
        <div className='seller-top'>
          <img
            src='https://i.pravatar.cc/150?img=12'
            alt='seller'
          />

          <div className='seller-badge'>
            Verified
          </div>
        </div>

        <h2>{seller.name}</h2>

        <p>{seller.university}</p>

        <div className='seller-meta'>
          <span>⭐ {seller.rating}</span>

          <span>{seller.products} Products</span>
        </div>

        <button>Visit Shop</button>
      </div>
    </Link>
  )
}

export default SellerCard
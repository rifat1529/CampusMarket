import './SellerCard.css'
import { Link } from 'react-router-dom'

function SellerCard({ seller }) {
  return (
    <Link to={`/shop/${seller.id}`}>
      <div className='seller-card'>
        <h2>{seller.name}</h2>

        <p>{seller.university}</p>

        <button>Visit Shop</button>
      </div>
    </Link>
  )
}

export default SellerCard
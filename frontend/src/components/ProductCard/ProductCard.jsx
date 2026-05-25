import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {

  return (
    <div className='product-card'>

      <div className='product-image'>

        <img
          src={
            product.image ||
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
          }
          alt={product.name}
        />

      </div>

      <div className='product-info'>

        <span className='product-category'>
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className='product-price'>
          {product.price}
        </p>

        <div className='product-footer'>

          <span className='seller-name'>

            {product.seller ||
              product.sellerName}

          </span>

          <Link to={`/product/${product.id}`}>
            <button>
              View
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ProductCard
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

const products = [
  {
    id: 1,
    name: 'Argentina Jersey',
    price: '৳1200',
    seller: 'DU Seller',
    category: 'Jersey',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '৳2500',
    seller: 'NSU Seller',
    category: 'Watch',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
  },
  {
    id: 3,
    name: 'Luxury Perfume',
    price: '৳1500',
    seller: 'BRAC Seller',
    category: 'Perfume',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601'
  },
  {
    id: 4,
    name: 'Gaming Headphone',
    price: '৳3200',
    seller: 'JU Seller',
    category: 'Gadget',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
  }
]

function ProductGrid() {
  return (
    <div className='product-grid'>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductGrid
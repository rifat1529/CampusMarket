import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

const demoProducts = [
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

function ProductGrid({
  search = '',
  category = 'All',
  sort = 'default'
}) {

  const uploadedProducts =
    JSON.parse(
      localStorage.getItem('products')
    ) || []

  let allProducts = [
    ...uploadedProducts,
    ...demoProducts
  ]

  // SEARCH

  allProducts = allProducts.filter(
    product =>

      product.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
  )

  // CATEGORY FILTER

  if (category !== 'All') {

    allProducts =
      allProducts.filter(
        product =>
          product.category ===
          category
      )

  }

  // SORT LOW TO HIGH

  if (sort === 'low-high') {

    allProducts.sort((a, b) =>

      parseInt(
        a.price.replace(/[^\d]/g, '')
      ) -

      parseInt(
        b.price.replace(/[^\d]/g, '')
      )

    )

  }

  // SORT HIGH TO LOW

  if (sort === 'high-low') {

    allProducts.sort((a, b) =>

      parseInt(
        b.price.replace(/[^\d]/g, '')
      ) -

      parseInt(
        a.price.replace(/[^\d]/g, '')
      )

    )

  }

  return (
    <>
      {allProducts.length > 0 ? (

        <div className='product-grid'>

          {allProducts.map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      ) : (

        <div className='no-products'>

          <h2>
            No products found 😢
          </h2>

        </div>

      )}
    </>
  )
}

export default ProductGrid
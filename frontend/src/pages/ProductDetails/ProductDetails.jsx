import Navbar from '../../components/Navbar/Navbar'

import {
  useParams,
  useNavigate,
  useLocation
} from 'react-router-dom'

function ProductDetails() {

  const { id } = useParams()

  const navigate = useNavigate()

  const location = useLocation()

  const uploadedProducts =
    JSON.parse(
      localStorage.getItem('products')
    ) || []

  const demoProducts = [
    {
      id: 1,
      name: 'Argentina Jersey',
      price: '৳1200',
      seller: 'DU Seller',
      category: 'Jersey',
      description:
        'Premium quality Argentina football jersey.',

      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
    },

    {
      id: 2,
      name: 'Smart Watch',
      price: '৳2500',
      seller: 'NSU Seller',
      category: 'Watch',
      description:
        'Stylish smartwatch with fitness tracking.',

      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    }
  ]

  const allProducts = [
    ...uploadedProducts,
    ...demoProducts
  ]

  const product = allProducts.find(
    item => item.id.toString() === id
  )

  const handleAddToCart = () => {

    const currentUser = JSON.parse(
      localStorage.getItem('currentUser')
    )

    if (!currentUser) {

      navigate('/login', {
        state: {
          from: location.pathname
        }
      })

      return
    }

    const existingCart =
      JSON.parse(
        localStorage.getItem('cart')
      ) || []

    existingCart.push(product)

    localStorage.setItem(
      'cart',
      JSON.stringify(existingCart)
    )

    alert('Added to cart 🔥')
  }

  if (!product) {

    return (
      <>
        <Navbar />

        <div className='container'>
          <h1>
            Product Not Found
          </h1>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div
        className='container'
        style={{
          padding: '50px 0'
        }}
      >

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              '1fr 1fr',
            gap: '40px',
            alignItems: 'center'
          }}
        >

          <div>

            <img
              src={product.image}
              alt={product.name}
              width='100%'
              style={{
                borderRadius: '20px',
                maxHeight: '500px',
                objectFit: 'cover'
              }}
            />

          </div>

          <div>

            <span
              style={{
                background: '#eee',
                padding: '8px 14px',
                borderRadius: '10px'
              }}
            >
              {product.category}
            </span>

            <h1
              style={{
                marginTop: '20px'
              }}
            >
              {product.name}
            </h1>

            <h2
              style={{
                margin: '20px 0'
              }}
            >
              {product.price}
            </h2>

            <p
              style={{
                color: '#666',
                lineHeight: '1.8'
              }}
            >
              {product.description ||
                'No description available.'}
            </p>

            <div
              style={{
                marginTop: '25px'
              }}
            >

              <strong>
                Seller:
              </strong>

              {' '}

              {product.seller ||
                product.sellerName}

            </div>

            <button
              onClick={handleAddToCart}
              style={{
                marginTop: '30px',
                padding:
                  '14px 24px',
                border: 'none',
                borderRadius: '12px',
                background: 'black',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetails
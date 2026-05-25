import Navbar from '../../components/Navbar/Navbar'
import {
  useNavigate,
  Navigate
} from 'react-router-dom'

import './SellerDashboard.css'

function SellerDashboard() {

  const navigate = useNavigate()

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser')
  )

  if (
    !currentUser ||
    currentUser.role !== 'seller'
  ) {
    return <Navigate to='/login' />
  }

  const allProducts =
    JSON.parse(
      localStorage.getItem('products')
    ) || []

  const sellerProducts =
    allProducts.filter(
      product =>
        product.sellerName ===
        currentUser.name
    )

  const allOrders =
  JSON.parse(
    localStorage.getItem('orders')
  ) || []

const sellerOrders =
  allOrders.filter(order =>

    order.products.some(
      product =>
        product.sellerName ===
        currentUser.name
    )

  )

  return (
    <>
      <Navbar />

      <section className='dashboard-section'>

        <div className='container'>

          <div className='dashboard-header'>

            <div>
              <h1>Seller Dashboard</h1>

              <p>
                Manage your campus shop
                and products
              </p>
            </div>

            <button
              className='add-product-btn'
              onClick={() =>
                navigate('/add-product')
              }
            >
              + Add Product
            </button>

          </div>

          <div className='stats-grid'>

            <div className='stat-card'>
              <h2>
                {sellerProducts.length}
              </h2>

              <span>Total Products</span>
            </div>

            <div className='stat-card'>
              <h2>34</h2>

              <span>Total Orders</span>
            </div>

            <div className='stat-card'>
              <h2>$1,240</h2>

              <span>Total Revenue</span>
            </div>

            <div className='stat-card'>
              <h2>4.9</h2>

              <span>Shop Rating</span>
            </div>

          </div>

          <div className='seller-profile-card'>

            <h2>
              {currentUser.name}'s Shop
            </h2>

            <p>Campus Seller</p>

            <span>
              {currentUser.role}
            </span>

          </div>

          <div className='dashboard-products'>

            <div className='section-header'>

              <h2>Your Products</h2>

              <p>
                Manage your listed items
              </p>

            </div>

            <div className='dashboard-product-grid'>

              {sellerProducts.length > 0 ? (

                sellerProducts.map(product => (

                  <div
                    key={product.id}
                    className='dashboard-product-card'
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      width='100%'
                      style={{
                        borderRadius: '12px',
                        marginBottom: '15px',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />

                    <h3>{product.name}</h3>

                    <p>{product.price}</p>

                    <span>
                      {product.category}
                    </span>

                    <div className='product-actions'>

                      <button>
                        Edit
                      </button>

                      <button
  onClick={() => {

    const updatedProducts =
      allProducts.filter(
        item =>
          item.id !== product.id
      )

    localStorage.setItem(
      'products',
      JSON.stringify(updatedProducts)
    )

    window.location.reload()

  }}
>
  Delete
</button>

                    </div>

                  </div>

                ))

              ) : (

                <p>
                  No products added yet.
                </p>

              )}

            </div>

          </div>

          <div className='dashboard-orders'>

  <div className='section-header'>

    <h2>
      Incoming Orders
    </h2>

    <p>
      Orders received from buyers
    </p>

  </div>

  <div className='orders-grid'>

    {sellerOrders.length > 0 ? (

      sellerOrders.map(order => (

        <div
          key={order.id}
          className='order-card'
        >

          <h3>
            Customer:
            {' '}
            {order.customer}
          </h3>

          <p>
            Status:
            {' '}
            {order.status}
          </p>

          <p>
            Total:
            {' '}
            ৳{order.total}
          </p>

          <div className='order-products'>

            {order.products.map(product => (

              <div
                key={product.id}
                className='order-product'
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>

                  <h4>
                    {product.name}
                  </h4>

                  <span>
                    {product.price}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      ))

    ) : (

      <p>
        No incoming orders yet.
      </p>

    )}

  </div>

</div>

        </div>

      </section>
    </>
  )
}

export default SellerDashboard
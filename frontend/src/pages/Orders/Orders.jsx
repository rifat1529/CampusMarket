import Navbar from '../../components/Navbar/Navbar'
import './Orders.css'

function Orders() {

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser')
  )

  const allOrders =
    JSON.parse(
      localStorage.getItem('orders')
    ) || []

  const userOrders =
    allOrders.filter(
      order =>
        order.customer ===
        currentUser?.name
    )

  return (
    <>
      <Navbar />

      <div className='orders-page'>

        <div className='container'>

          <h1>
            My Orders 📦
          </h1>

          {userOrders.length > 0 ? (

            <div className='orders-container'>

              {userOrders.map(order => (

                <div
                  key={order.id}
                  className='user-order-card'
                >

                  <div className='order-top'>

                    <div>

                      <h2>
                        Order #{order.id}
                      </h2>

                      <p>
                        Status:
                        {' '}
                        {order.status}
                      </p>

                    </div>

                    <h3>
                      ৳{order.total}
                    </h3>

                  </div>

                  <div className='ordered-products'>

                    {order.products.map(product => (

                      <div
                        key={product.id}
                        className='ordered-product'
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

                  <div className='shipping-info'>

                    <h4>
                      Delivery Address
                    </h4>

                    <p>
                      {order.shipping.address}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className='no-orders'>

              <h2>
                No orders yet 📭
              </h2>

              <p>
                Your placed orders will appear here
              </p>

            </div>

          )}

        </div>

      </div>
    </>
  )
}

export default Orders
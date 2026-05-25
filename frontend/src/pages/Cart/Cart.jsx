import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import './Cart.css'

function Cart() {

  const [cartItems, setCartItems] =
    useState(
      JSON.parse(
        localStorage.getItem('cart')
      ) || []
    )

  const handleRemove = id => {

    const updatedCart =
      cartItems.filter(
        item => item.id !== id
      )

    setCartItems(updatedCart)

    localStorage.setItem(
      'cart',
      JSON.stringify(updatedCart)
    )
  }

  const totalPrice = cartItems.reduce(
    (total, item) => {

      const numericPrice =
        parseInt(
          item.price.replace(/[^\d]/g, '')
        ) || 0

      return total + numericPrice

    },
    0
  )

  return (
    <>
      <Navbar />

      <div className='container cart-page'>

        <h1 className='cart-title'>
          Your Cart 🛒
        </h1>

        {cartItems.length > 0 ? (

          <div className='cart-container'>

            {cartItems.map(item => (

              <div
                key={item.id}
                className='cart-item'
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className='cart-info'>

                  <h2>{item.name}</h2>

                  <p>
                    {item.category}
                  </p>

                  <strong>
                    {item.price}
                  </strong>

                </div>

                <button
                  className='remove-btn'
                  onClick={() =>
                    handleRemove(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))}

            <div className='cart-summary'>

              <h2>
                Total: ৳{totalPrice}
              </h2>

              <button
                className='checkout-btn'
                onClick={() =>
                  window.location.href = '/checkout'
                }
              >
                Proceed To Checkout
              </button>

            </div>

          </div>

        ) : (

          <div className='empty-cart'>

            <h2>
              Your cart is empty 🛒
            </h2>

            <p>
              Add products to continue shopping
            </p>

          </div>

        )}

      </div>
    </>
  )
}

export default Cart
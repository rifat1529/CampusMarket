import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './Checkout.css'

function Checkout() {

  const navigate = useNavigate()

  const cartItems =
    JSON.parse(
      localStorage.getItem('cart')
    ) || []

  const currentUser =
    JSON.parse(
      localStorage.getItem('currentUser')
    )

  const [formData, setFormData] =
    useState({
      name: currentUser?.name || '',
      phone: '',
      address: '',
      payment: 'Cash On Delivery'
    })

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

  const handleChange = e => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleOrder = e => {

    e.preventDefault()

    const existingOrders =
      JSON.parse(
        localStorage.getItem('orders')
      ) || []

    const newOrder = {
      id: Date.now(),

      customer: currentUser?.name,

      products: cartItems,

      total: totalPrice,

      shipping: formData,

      status: 'Pending'
    }

    existingOrders.push(newOrder)

    localStorage.setItem(
      'orders',
      JSON.stringify(existingOrders)
    )

    localStorage.removeItem('cart')

    alert('Order Placed Successfully 🔥')

    navigate('/')

  }

  return (
    <>
      <Navbar />

      <div className='checkout-page'>

        <div className='container'>

          <h1>
            Checkout 🛍️
          </h1>

          <div className='checkout-grid'>

            <form
              className='checkout-form'
              onSubmit={handleOrder}
            >

              <input
                type='text'
                name='name'
                placeholder='Full Name'
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type='text'
                name='phone'
                placeholder='Phone Number'
                onChange={handleChange}
              />

              <textarea
                name='address'
                placeholder='Delivery Address'
                rows='5'
                onChange={handleChange}
              ></textarea>

              <select
                name='payment'
                onChange={handleChange}
              >

                <option>
                  Cash On Delivery
                </option>

                <option>
                  BKash
                </option>

                <option>
                  Nagad
                </option>

              </select>

              <button type='submit'>
                Place Order
              </button>

            </form>

            <div className='checkout-summary'>

              <h2>
                Order Summary
              </h2>

              {cartItems.map(item => (

                <div
                  key={item.id}
                  className='summary-item'
                >

                  <span>
                    {item.name}
                  </span>

                  <strong>
                    {item.price}
                  </strong>

                </div>

              ))}

              <div className='summary-total'>

                <h3>
                  Total
                </h3>

                <h2>
                  ৳{totalPrice}
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Checkout
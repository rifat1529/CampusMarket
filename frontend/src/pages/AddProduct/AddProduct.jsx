import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function AddProduct() {

  const navigate = useNavigate()

  const [productData, setProductData] =
    useState({
      name: '',
      price: '',
      image: '',
      category: '',
      description: ''
    })

  const handleChange = e => {

    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = e => {

    e.preventDefault()

    const currentUser = JSON.parse(
      localStorage.getItem('currentUser')
    )

    const existingProducts =
      JSON.parse(
        localStorage.getItem('products')
      ) || []

    const newProduct = {
      id: Date.now(),

      ...productData,

      sellerName: currentUser?.name,

      sellerRole: currentUser?.role
    }

    existingProducts.push(newProduct)

    localStorage.setItem(
      'products',
      JSON.stringify(existingProducts)
    )

    alert('Product Added Successfully 🔥')

    navigate('/marketplace')

  }

  return (
    <>
      <Navbar />

      <div className='auth-page'>

        <div className='auth-overlay'></div>

        <form
          className='auth-form'
          onSubmit={handleSubmit}
        >

          <h1>Add Product 📦</h1>

          <input
            type='text'
            name='name'
            placeholder='Product Name'
            onChange={handleChange}
          />

          <input
            type='text'
            name='price'
            placeholder='Price'
            onChange={handleChange}
          />

          <input
            type='text'
            name='image'
            placeholder='Image URL'
            onChange={handleChange}
          />

          <input
            type='text'
            name='category'
            placeholder='Category'
            onChange={handleChange}
          />

          <textarea
            name='description'
            placeholder='Description'
            rows='4'
            onChange={handleChange}
          ></textarea>

          <button type='submit'>
            Upload Product
          </button>

        </form>
      </div>
    </>
  )
}

export default AddProduct
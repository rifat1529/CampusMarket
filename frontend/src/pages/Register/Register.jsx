import { useState } from 'react'
import {
  useNavigate,
  Link
} from 'react-router-dom'

import '../Register/Register.css'

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'buyer'
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const existingUsers =
      JSON.parse(
        localStorage.getItem('users')
      ) || []

    const emailExists =
      existingUsers.find(
        user =>
          user.email === formData.email
      )

    if (emailExists) {
      alert('Email already exists')
      return
    }

    existingUsers.push(formData)

    localStorage.setItem(
      'users',
      JSON.stringify(existingUsers)
    )

    localStorage.setItem(
      'currentUser',
      JSON.stringify(formData)
    )

    if (formData.role === 'seller') {

      navigate('/seller-dashboard')

    } else {

      navigate('/')

    }
  }

  return (
    <div className='auth-page'>

      <div className='auth-overlay'></div>

      <form
        className='auth-form'
        onSubmit={handleSubmit}
      >
        <h1>Create Account 🚀</h1>

        <p className='auth-subtitle'>
          Join CampusMarket today
        </p>

        <input
          type='text'
          name='name'
          placeholder='Full Name'
          onChange={handleChange}
        />

        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='Create password'
          onChange={handleChange}
        />

        <select
          name='role'
          onChange={handleChange}
        >
          <option value='buyer'>
            Buyer Account
          </option>

          <option value='seller'>
            Seller Account
          </option>
        </select>

        <button type='submit'>
          Create Account
        </button>

        <div className='auth-links'>

          <Link to='/login'>
            Already have an account?
          </Link>

        </div>
      </form>
    </div>
  )
}

export default Register
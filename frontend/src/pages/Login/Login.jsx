import { useState } from 'react'
import {
  useNavigate,
  useLocation,
  Link
} from 'react-router-dom'

import './Login.css'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const users =
      JSON.parse(
        localStorage.getItem('users')
      ) || []

    const savedUser = users.find(
      user =>
        user.email === email &&
        user.password === password
    )

    if (savedUser) {

      localStorage.setItem(
        'currentUser',
        JSON.stringify(savedUser)
      )

      const redirectPath =
        location.state?.from

      if (redirectPath) {

        navigate(redirectPath)

      } else if (
        savedUser.role === 'seller'
      ) {

        navigate('/seller-dashboard')

      } else {

        navigate('/')

      }

    } else {

      alert('Invalid email or password')

    }
  }

  return (
    <div className='auth-page'>

      <div className='auth-overlay'></div>

      <form
        className='auth-form'
        onSubmit={handleSubmit}
      >
        <h1>Welcome Back 👋</h1>

        <p className='auth-subtitle'>
          Login to continue shopping
        </p>

        <input
          type='email'
          placeholder='Enter your email'
          onChange={e =>
            setEmail(e.target.value)
          }
        />

        <input
          type='password'
          placeholder='Enter your password'
          onChange={e =>
            setPassword(e.target.value)
          }
        />

        <button type='submit'>
          Login
        </button>

        <div className='auth-links'>

          <Link to='/register'>
            Create New Account
          </Link>

          <button
            type='button'
            className='forgot-btn'
            onClick={() =>
              alert(
                'Forgot password feature coming soon 🔥'
              )
            }
          >
            Forgot Password?
          </button>

        </div>
      </form>
    </div>
  )
}

export default Login
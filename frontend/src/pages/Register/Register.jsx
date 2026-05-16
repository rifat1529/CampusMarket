import '../Login/Login.css'

function Register() {
  return (
    <div className='auth-page'>
      <form className='auth-form'>
        <h1>Register</h1>

        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />

        <button>Create Account</button>
      </form>
    </div>
  )
}

export default Register
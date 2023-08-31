import React from 'react'

const Login = () => {
  return (
    <section className='login-page'>
<h3>Login</h3>
<div>
    <p>Email</p>
    <input type="email" />

</div>

<div>
    <p>Password</p>
    <input type="password" />
    
</div>

<button>Login</button>
    </section>
  )
}

export default Login
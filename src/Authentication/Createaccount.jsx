import React from 'react'

const Createaccount = () => {
  return (
    <section className='create-account'>
<h3>Signup</h3>
<div>
   <p>What’s your email address?</p>
   <input type="text" />
</div>

<div>
   <p>Create a password</p>
   <input type="password" />
</div>

<div>
   <p>What should we call you?</p>
   <input type="text" />
</div>

<button>Signup</button>

    </section>
  )
}

export default Createaccount
import React from 'react'
import '../loginsinup.css'
function Login() {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-containner">
        <h1>Sing Up</h1>
        <div className="loginsingup-filed">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
        </div>
      <button>Continue</button>
          <p className="loginsinguo">Aready have account?<span>Login here.</span></p>
          <div className="loginsingup-check">
            <input type="checkbox" name="" id="" />
            <p>By continue agree to the term and condition with use of  privacy</p>
          </div>
      </div>

    </div>
  )
}

export default Login
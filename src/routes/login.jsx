import axios from 'axios'
import React, { useState } from 'react'

export default function Login(props) {
  const [name,setName] = useState('name')
  const [email,setEmail]=useState('email')
  const [password,setPassword]=useState('password')

  function handleSignup(event) {
    event.preventDefault()
    // console.log(name)
    // console.log(email)
    const data = {
      name : name ,
      email : email ,
      password: password
    }

    axios.post('http://localhost:3000/users', data)
    .then((response) => {
      console.log('Signed up successfully:', response.data); 
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
    
  }

  return (
  <>
<section>
  <div>
    <h1 className='mt-10 mb-5 font-bold text-2xl flex justify-center'>
      Login Account
    </h1>
  </div>

  <div className='flex justify-center'>
    <form className='flex flex-col '>
      <label htmlFor="login-email">
        Email
      </label>
      <input
        className="border border-red-600 w-full outline-none p-1"
        type="email"
        id="login-email"
      />
      <label htmlFor="login-password">
        Password
      </label>
      <input
        className="border border-red-600 w-full outline-none p-1"
        type="password"
        id="login-password"
      />
   <div className='flex flex-col align-middle items-center justify-center mt-8 '>
     <button className='mb-5 px-2 rounded text-white bg-red-500 w-fit '>
       Submit
     </button>
     <h1 className='mt-1 mb-5 font-bold  flex justify-center'>
       Don't have an account ? Sign Up Below  
     </h1>
   </div>

    </form>
  </div>

</section>





  <section className='signUpForm'>
  <div>
    <h1 className='mt-10 mb-5 font-bold text-2xl flex justify-center'>
      Sign Up with us
    </h1>
  </div>

  <div className='flex justify-center'>
    <form 
      onSubmit={handleSignup}
      className='flex flex-col '>
        
      <label htmlFor="signup-name">
        Name
      </label>
      <input
        onChange={(event) => setName(event.target.value)}
        className="w-full border border-red-600 outline-none p-1"
        type="text"
        id="signup-name"
      />
      <label htmlFor="signup-email">
        Email
      </label>
      <input
        onChange={(event) => setEmail(event.target.value)}
        className="border border-red-600 w-full outline-none p-1"
        type="email"
        id="signup-email"
      />
      <label htmlFor="signup-password">
        Password
      </label>
      <input
        onChange={(event)=>setPassword(event.target.value)}
        className="border border-red-600 w-full outline-none p-1"
        type="password"
        id="signup-password"
      />

  <div className='flex flex-col items-center justify-center'>
    <button className='mt-8 px-2 rounded text-white bg-red-500 w-fit '>
      Submit
    </button>
  </div>
      
    </form>
  </div>

</section>

  
  
  
  
  </>
  )
}

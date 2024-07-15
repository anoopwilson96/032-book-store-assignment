import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
// navigate hook to successfully navigate page to home path after successful login

const navigate = useNavigate()

// //Data declarations for Sign Up function

const [signupName, setSignupName] = useState('');
const [signupEmail, setSignupEmail] = useState('');
const [signupPassword, setSignupPassword] = useState('');

//   // function to handle Sign Up

  function handleSignup(event) {
    
    event.preventDefault()
    // console.log(name)
    // console.log(email)
    const data = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    }

    axios.post(`${import.meta.env.VITE_API_URL}/users`, data)
    .then((response) => {
     // console.log('Signed up successfully:', response.data) 
      navigate('/login')
      alert('Signed up successfully. Please LOGIN to continue')
    })
    .catch((error) => {
      console.error('Error signing up:', error)
      alert('Error: Try again')

    });
    

  }
//declaration to get Login data
const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');

//function to handle Login
function handleLogin(event) {
  event.preventDefault()


  const data = {
    email: loginEmail,
    password: loginPassword,
  }

  axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, data, {withCredentials:true})
  //don't forget to add {withCredentials:true} so that token is exchanged to browser
  // add cors()on Back End
  .then((response) => {
    // console.log('Signed up successfully:', response.data) 
    alert('Signed In: Enjoy Shopping')
    navigate('/')
    
  })
  .catch((error) => {
    console.error('Error signing up:', error);
    alert('Password Invalid')

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
    <form 
    onSubmit={handleLogin}
    className='flex flex-col '>
      <label htmlFor="login-email">
        Email
      </label>
      <input
      onChange={(event) => setLoginEmail(event.target.value)}
        className="border border-red-600 w-full outline-none p-1"
        type="email"
        id="login-email"
      />
      <label htmlFor="login-password">
        Password
      </label>
      <input
        onChange={(event) => setLoginPassword(event.target.value)}
        className="border border-red-600 w-full outline-none p-1"
        type="password"
        id="login-password"
      />
   <div className='flex flex-col align-middle items-center justify-center mt-8 '>
     <button className='mb-5 px-2 rounded text-white bg-red-500 w-fit ' id="submitButton">
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
        onChange={(event) => setSignupName(event.target.value)}
        className="w-full border border-red-600 outline-none p-1"
        type="text"
        id="signup-name"
      />
      <label htmlFor="signup-email">
        Email
      </label>
      <input
        onChange={(event) => setSignupEmail(event.target.value)}
        className="border border-red-600 w-full outline-none p-1"
        type="email"
        id="signup-email"
      />
      <label htmlFor="signup-password">
        Password
      </label>
      <input
        onChange={(event)=>setSignupPassword(event.target.value)}
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

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserLoggedIn } from '../features/login/loginSlice';

export default function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch() 
//const [isLoading, setIsLoading] = useState(false);: Creates a state variable named isLoading using the useState hook.
//The initial value of isLoading is set to false, indicating that the loading animation is not initially displayed.
// setIsLoading is a function used to update the isLoading state.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //This useEffect hook runs after the Logout component mounts (i.e., is added to the DOM). 
    //The empty dependency array [] ensures it runs only once when the component mounts.
    axios.get(`${import.meta.env.VITE_API_URL}/auth/logout`,{withCredentials:true})
    .then((response)=>{
      console.log('Logout successful')
      dispatch(setUserLoggedIn(false))
      setIsLoading(true);
//Sets the isLoading state to true, triggering the display of the loading animation.


      setTimeout(() => {
      //setTimeout(() => { ... }, 2000);: Simulates a logout process with a 2-second timeout (adjust as needed).
      // Inside the timeout function:setIsLoading(false);: Sets the isLoading state back to false, hiding the loading animation after the simulated logout.
        setIsLoading(false);
        // Redirect or perform other actions after successful logout
        navigate('/login')
      }, 2000); // Adjust timeout as needed,only after 2000(2seconds) the setIsLoading(false)(false means stop animation)and navigate(/login) code will run
    },[20])
    .catch(
      console.log('Error in logging out')
    )

  }, []);

  
  return (
    <>
    <div className='flex flex-row justify-center items-center align-middle mt-20 mb-5'>
{/* isLoading ? ... : ...: This performs conditional rendering based on the isLoading state.
If isLoading is true (i.e., during logout):
The content within the first set of parentheses (...) is rendered. This typically includes the "You're logging out */}
    {isLoading ? (
        <div className="logout-container flex-col items-center align-middle justify-center ">
          <h3 className='font-semibold text-3xl'>You're logging out</h3>
          <ReactLoading className='mx-auto ' type="balls" color="red" height={100} width={130} />
        </div>
      ) : (
        <div className="logout-container">
          <h3>Error in logging out</h3>
          <span>Try again later</span>
        </div>
      )}

    </div>

    </>
  );
}

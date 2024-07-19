import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import { setUserLoggedIn } from '../features/login/loginSlice';

export default function Header() {
//codes of REDUX (setLoggedIn used in below useEffect()hook will replace by Redux global state)
//1st useSelector is hook in redux that help to get or select data from Slice and reducer to components
const userLoggedIn = useSelector(state =>
  state.login.userLoggedIn)
//useSelector will take function state and from state > from login(alias loginSlice) our needed data userLoggedIn is selected
//(state->login->userLoggedIn)
//useSelector select the data from Redux store and loginSlice
// 2nd useDispatch() hook of redux will  send Action (action.payload) that changes the State. Eg here its send action that changes userLoggedIn(true or false)
const dispatch = useDispatch()
// and give data(new State) (logged in or not from useEffect()/old local state request )
//the userLoggedIn Global State of redux will replace loggedIn and does conditional rendering




// to work on Login/logout button (its a local state)REDUX WILL EDIT IT LATER
//when page is loaded, loggedIn is false
const [loggedIn,setLoggedIn]= useState(false)  //HERE setLoggedIn is LOCAL STATE. IT WILL BE REPLACED BY GLOBAL SATE

// CODE FOR LOGIN & LOGOUT STATUS ON TOP AND REDUX
//useEffect is used because we need it to load after page is loaded
//if we needed to load first(before loading page) we could have used useLoaderData()

useEffect(()=>{
  axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`,{withCredentials:true})
  .then(response =>{
    console.log(response)
    //setLoggedIn(true) [replaced by GlobalState]  //now if user is logged in, it will setLoggedIn as true 
    //and at bottom conditional rendering is used to show either LOGIN or LOGOUT
    dispatch(setUserLoggedIn(true))
    //here redux useDispatch is used to update userLoggedIn state
  })
  .catch(error=>{
    console.log('User not signed in')
    dispatch(setUserLoggedIn(false))
  })
})


// CODE FOR NAVIGATION BAR RESPONSIVENESS
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state on button click
  };

  return (
    <>
<header>
       
<section className="headerOne ">
<Link to={'/'}>
<img className="  max-h-48 mx-auto" src="../logo.png" alt="" />
</Link>

</section>
<section className="headerTwo mt-0 py-8 bg-[#fdbfbfeb] ">
<div className="searchBar  flex flex-row justify-center">
<input type="text" className="border border-red-600  w-5/12 outline-none p-1" placeholder="Search by authors,book name,language & categories " />
<button className="bg-red-600 px-2"><span className="material-symbols-outlined  text-white  text-lg">search</span>
</button>
</div>
</section>      



        <div className='p-5 flex flex-row align-middle justify-evenly max-w-full mx-auto bg-[#fdbfbfeb]'>
          <div className=' hover:text-red-600 text-lg'>
            <Link>
            <i className={`fa-solid fa-bars toggleButton ${isMenuOpen ? 'active' : ''} md:hidden `} onClick={toggleMenu}></i>
            </Link>
          </div>

          <ul className={`dropMenu font- mx-1 mt-10 flex gap-6 flex-col justify-evenly ${isMenuOpen ? 'visible' : 'hidden'} md:flex md:flex-row md:mt-0 md:gap-32`}>
            <Link to={'/'} className='' >
              <li className="hover:text-red-600 text-lg ">Home</li>
            </Link>
            <Link to={'/books'} className='' >
              <li className="hover:text-red-600 text-lg ">Books</li>
            </Link>
            <Link to={'/authors'} className='' >
              <li className="hover:text-red-600 text-lg ">Authors</li>
            </Link>
{/* conditional rendering is used to determine to show LOGOUT or LOGIN. if setLoggedIn is true, it will show LOGIN
or else LOGOUT */}
            { // loggedIn? this localState replaced by globalState of redux 
             userLoggedIn?  (<Link to={'/logout'}>
                <li className="hover:text-red-600 text-lg ">Logout</li>
              </Link>):(<Link to={'/login'}>
              <li className="hover:text-red-600 text-lg text-wrap ">Login</li>
             </Link>)
            }

          </ul>

          <div>
            <Link to={'/cart'} className='relative'>
              <h3 className=" hover:text-red-600 text-lg ">
                <i className=" fa-solid fa-cart-shopping"></i>
                <span className=' absolute bottom-4 left-3 bg-red-400 text-black text-sm px-1.5 py-0 rounded-full border'>1</span>
              </h3>
            </Link>
          </div>
        </div>
</header>
    </>
  );
}

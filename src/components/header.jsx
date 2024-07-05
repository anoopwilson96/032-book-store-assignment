import React from 'react'
import { Outlet, Link } from "react-router-dom";


export default function Header() {
  return (
    <>
    <header>

        <section className="headerOne">
          <Link to={'/'}>
          <img className="  max-h-48 mx-auto" src="../logo.png" alt="" />
          </Link>

        </section>
        <section className="headerTwo mt-0">
          <div className="searchBar  flex flex-row justify-center ">
          <input type="text" className="border border-red-600  w-5/12 outline-none p-1" placeholder="Search by authors,book name,language & categories " />
          <button className="bg-red-600 px-2"><span className="material-symbols-outlined  text-white  text-lg">search</span>
          </button>
          
          </div>
        </section>
        <div>
        <ul className=' font- mx-1 mt-5 flex gap-1 flex-row  justify-evenly'>

          <Link to={'/'} className='' >
          <li className="hover:text-red-600 text-lg ">Home</li>
          </Link>
          <Link to={'/books'} className='' >
          <li className="hover:text-red-600 text-lg ">Books</li>
          </Link>
          <Link to={'/authors'} className='' >
          <li className="hover:text-red-600 text-lg ">Authors</li>
          </Link>
          <Link to={'/login'} className='' >
          <li className="hover:text-red-600 text-lg text-wrap ">Account</li>
          </Link>
          <Link to={'/'} className='' >
          <li className="hover:text-red-600 text-lg ">Logout</li>
          </Link>
          <Link>
          <li className="hover:text-red-600 text-lg ">My Cart</li>
          </Link>
        
        </ul>


        </div>

    </header>
    </>
  )
}

import React from 'react'
import { Outlet, Link } from "react-router-dom";


export default function Header() {
  return (
    <>
    <header>

        <section className="headerOne">
          <Link to={'/'}>
          <img className="  max-h-48 mx-auto" src="./logo.png" alt="" />
          </Link>

        </section>
        <section className="headerTwo mt-0">
          <div className="searchBar  flex flex-row justify-center ">
          <input type="text" className="border border-red-600  w-5/12 outline-none p-1" placeholder="Search by authors,book name,language & categories " />
          <button className="bg-red-600 px-2"><span className="material-symbols-outlined  text-white  text-lg">search</span>
          </button>
          
          </div>
        </section>

    </header>
    </>
  )
}

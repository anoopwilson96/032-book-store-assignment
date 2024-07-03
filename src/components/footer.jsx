import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className=" pt-10 mt-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  ">
    <div className="footerOne ">
      <ul className=" flex flex-col align-middle items-center justify-start gap-2">
        <li className="hover:text-red-600 text-lg "> New Arrivals</li>
        <li className="hover:text-red-600 text-lg "> Popular Books</li>
        <li className="hover:text-red-600 text-lg "> Popular Authors</li>
        <li className="hover:text-red-600 text-lg mb-5 "> Award Winning Books</li>
      </ul>
    </div>
    <div className="footerTwo">
      <div className="flex flex-col align-middle items-center justify-start gap-2">
        {" "}
        <div className="flex flex-col align-middle items-center justify-start gap-2 ">
          <h3 className="mb-3 text-2xl font-mono text-nowrap">
            Get updates of new books
          </h3>
          <input
            placeholder="Your Email address"
            className=" border border-double border-zinc-300 p-2 rounded-full"
            type="email"
            name=""
            id=""
          />
          <button
            className=" mb-5 px-3 rounded-full border bg-red-200 border-zinc-300 hover:bg-slate-100 "
            type="submit"
          >
            Subscribe
          </button>
        </div>
        <div className="mb-5">
          <h3 className="font-mono">Talk to Us</h3>
          <div className=" flex gap-3">
            <i className="fa-regular fa-envelope text-4xl" />
            <i className="fa-solid fa-phone text-3xl" />
          </div>
        </div>
      </div>
    </div>
    <div className="footerThree">
      <ul className="flex flex-col align-middle items-center justify-start gap-2">
        <li className="hover:text-red-600 text-lg "> About Us</li>
        <li className="hover:text-red-600 text-lg "> News Letter</li>
        <li className="hover:text-red-600 text-lg "> Hiring</li>
        <li className="hover:text-red-600 text-lg ">Offline stores</li>
      </ul>
    </div>
  </div>
    </footer>
    
    
    </>
  )
}

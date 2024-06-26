import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Books() {
  return (
    <>

<main className='container max-w-6xl mx-auto'>
    <div>
      <h1 className='mt-5 mb-10 font-bold text-4xl flex justify-center'>
        Popular Books
      </h1>
    </div>



    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto  '>


    <div className='flex justify-center '>
      <div className=' border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        <img className='' src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/574/9780143028574.jpg" alt="" />
        <h3 className='mt-5  text-2xl font-semibold'>Books Name </h3>
        <h3 className=' mb-2 text-lg '>Author's Name </h3>
        <span className='text-lg'> Price: $ 100 </span>
        <div className='flex flex-col'>
          <button className=' mt-3 mb-2 bg-red-500 text-white px-2 rounded-md'>Add to Cart</button>
          <button className=' mt-3 mb-2 bg-slate-400  text-white px-2 rounded-md'>Mark ❤️️</button>
        </div>
        {/* <span className='text-lg'>Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India</span> */}
      </div>
    </div>
    <div className='flex justify-center '>
      <div className=' border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        <img className='' src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/574/9780143028574.jpg" alt="" />

        <Link to={'/book'}> 
        <h3 className='mt-5  text-2xl font-semibold'>Books Name </h3>
        </Link>
        <h3 className=' mb-2 text-lg '>Author's Name </h3>
        
        <span className='text-lg'> Price: $ 100 </span>
        <div className='flex flex-col'>
          <button className=' mt-3 mb-2 bg-red-500 text-white px-2 rounded-md'>Add to Cart</button>
          <button className=' mt-3 mb-2 bg-slate-400  text-white px-2 rounded-md'>Mark ❤️️</button>
        </div>
        {/* <span className='text-lg'>Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India</span> */}
      </div>
    </div>


    <div className='flex justify-center '>
      <div className=' border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        <img className='' src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/574/9780143028574.jpg" alt="" />
        <h3 className='mt-5  text-2xl font-semibold'>Books Name </h3>
        <h3 className=' mb-2 text-lg '>Author's Name </h3>
        <span className='text-lg'> Price: $ 100 </span>
        <div className='flex flex-col'>
          <button className=' mt-3 mb-2 bg-red-500 text-white px-2 rounded-md'>Add to Cart</button>
          <button className=' mt-3 mb-2 bg-slate-400  text-white px-2 rounded-md'>Mark ❤️️</button>
        </div>
        {/* <span className='text-lg'>Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India</span> */}
      </div>
    </div>







    </div>






</main>
    
    
    </>
  )
}

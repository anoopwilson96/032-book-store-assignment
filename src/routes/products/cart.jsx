import React from 'react'
import CartItem from './cartItem'

export default function Cart() {
  return (
    <>

    <div className='p-5'>
    <div>
      <h1 className='mt-5 mb-10 font-bold text-4xl flex justify-center'>
       Ready to checkout ?
      </h1>
    </div>
{/* Cart Item code */}

   <CartItem/>
   <CartItem/>


    <div className=' mt-10 border border-red-700 m-auto max-w-5xl p-5 flex flex-col gap-3 align-middle justify-start items-start text-nowrap '>

   
    <h2 className='font-bold text-2xl flex flex-row items-center mx-auto '>
       CHECKOUT
    </h2>

    <div>
    <h2>Total items ( 20 )</h2>
    <h2>Price before tax - 255 </h2>
    <h2>Total tax - 40</h2>
    <h2>Price after Tax - 295</h2>
    </div>


    <h3 className='font-bold text-2xl border border-black bg-red-400 px-2 flex flex-row items-center mx-auto'>Pay Now</h3>

    </div>







    </div>
    
    
    </>
  )
}

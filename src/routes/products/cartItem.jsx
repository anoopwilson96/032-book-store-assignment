import React from 'react'

export default function CartItem() {
  return (
    <>    
    <div className='border border-red-700 m-auto max-w-5xl p-5 flex flex-row gap-3 align-middle justify-evenly items-center text-nowrap mb-5 '>
    <img className='mr-1 max-h-16 md:max-h-28' src="https://www.bookswagon.com/productimages/images200/417/9780670094417.jpg" alt="" />
    <h3 className='text-lg'>Book Name</h3>
    <h2>₹250  </h2>
    <div className='flex gap-2' >
      <button className='border px-1 text-xl '>+</button>
      <h2 className='font-bold text-xl '>0</h2>
      <button className=' border px-1 text-xl'>-</button>
    </div>
  </div>
    </>
    
  )
}

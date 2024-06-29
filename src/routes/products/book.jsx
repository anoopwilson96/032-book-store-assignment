import React from 'react'
import { useLoaderData } from 'react-router-dom'


export async function loader(params) {
  
  const response = await fetch(`http://localhost:3000/books/${bookId}`)
  const book = await response.json()
  return { book}
} 





export default function Book() {
  const {book} = useLoaderData();
  console.log(book)
  return (
    <>

    
    <main className='container max-w-4xl mx-auto  mt-5 border border-red-600 rounded-3xl shadow-slate-400 p-5'>


    <div className='  flex flex-row items-center justify-center text-wrap  gap-5' >
      <img className='' src='' alt="" />
      
      <div className='flex flex-col gap-5'>
           <h3 className='mt-5  text-2xl font-semibold'>Books Name </h3>
           <h3 className=' mb-2 text-lg '>Author's Name </h3>
           <span className='text-lg'> Price: $ 100 </span>

          <span className='text-lg'>Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India</span>
      </div>

    </div>
  
  <div className='flex flex-col'>
        <button className=' mt-3 mb-2 bg-red-500 text-white px-2 py-1 rounded-md'>Add to Cart</button>
        <button className=' mt-3 mb-2 bg-slate-400  text-white px-2 py-1 rounded-md'>Mark ❤️️</button>
  </div>
</main></>
  )
}

import React from 'react'
import { Link,useLoaderData } from 'react-router-dom'



  
  export async function loader({params}) {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/books/${params.bookId}`);
    const book = await response.json();
    return { book };
  }
  




export default function Book() {
  const {book} = useLoaderData();
  console.log(book)
  return (
    <>

    
    <main className='container max-w-4xl mx-auto  mt-5 border border-red-600 rounded-3xl shadow-slate-400 p-5'>


    <div className='  flex flex-row items-center justify-center text-wrap  gap-5' >
      <img className='' src={book.bookImage} alt="" />
      
      <div className='flex flex-col gap-5'>
           <h3 className='mt-5  text-2xl font-semibold'>{book.bookName}</h3>
           <h3 className=' mb-2 text-lg '>{book.bookAuthor}</h3>
           <span className='text-lg'> Price: ${book.price}</span>

          <span className='text-lg'>{book.description}</span>
      </div>

    </div>
  
  <div className='flex flex-col'>
        <button className=' mt-3 mb-2 bg-red-500 text-white px-2 py-1 rounded-md'>Add to Cart</button>
        <button className=' mt-3 mb-2 bg-slate-400  text-white px-2 py-1 rounded-md'>Mark ❤️️</button>
  </div>
</main></>
  )
}

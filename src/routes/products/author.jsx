import React from 'react'
import { Outlet, Link, useLoaderData } from "react-router-dom";

export async function loader({params}) {
  
  const response = await fetch(`http://localhost:3000/books/?authorId=${params.authorId}`)
  const books = await response.json()


  const authorResponse = await fetch(`http://localhost:3000/authors/${params.authorId}`)
  const authors = await authorResponse.json()
  return { books,authors}
} 




export default function Author() {
  const {books,authors} = useLoaderData()
  console.log(books)
  console.log(authors)

  return (
    <>
     <div>
      <h1 className='mt-5 mb-10 font-bold text-4xl flex justify-center'>
        Books by {authors.authorName}
      </h1>
    </div>
    

    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto'>
  {books.map((book)=>(
    <div key={book._id} className='flex justify-center '>
     <div className=' border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        
        <Link to={`/books/${book._id}`} className='flex flex-col justify-center'>
        <img className='' src={book.bookImage} alt="" />
        <h3 className='mt-5  text-2xl mx-2 font-semibold'>{book.bookName}</h3>
        </Link>
        
        <h3 className=' mb-2 text-lg text-blue-800 '>{book.bookAuthor}</h3>
        <span className='text-lg'> Price: $ {book.price} </span>
        <div className='flex flex-col'>
          <button className=' mt-3 mb-2 bg-red-500 text-white px-2 rounded-md'>Add to Cart</button>
          <button className=' mt-3 mb-2 bg-slate-400  text-white px-2 rounded-md'>Mark ❤️️</button>
        </div>
      </div>
   </div>   
      ))}
</div>




    </>
  )
}

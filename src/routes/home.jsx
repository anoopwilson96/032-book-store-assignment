import React from 'react'
import ImageSlider from '../components/imageSlider'
import Authors from './products/authors'
import { Outlet, Link } from "react-router-dom";
import Books from './products/books';
import {useLoaderData } from "react-router-dom";
import Book from './products/book';


export async function loader() {
  
    const response = await fetch('http://localhost:3000/authors')
    const authors = await response.json()

    const bookResponse = await fetch('http://localhost:3000/books')

    const books = await bookResponse.json()
    books.sort(() => Math.random() - 0.5); // books array is shuffled
    const slicedBooks = books.slice(0, 8); // Get the first 8 random elements(books)
  
    return { authors,slicedBooks}
  } 






export default function Home() {
  const {authors,slicedBooks} = useLoaderData();
  return (
<>

<ImageSlider/>

<section className='Home-Popular-Authors-Section container max-w-7xl mx-auto '>

<div>
      <h1 className='mt-5 mb-10 font-bold text-4xl flex justify-center'>
        Popular Authors
      </h1>
</div>


<div className='grid grid-cols-1 md:grid-cols-3 gap-5  justify-center items-center mx-auto '>

    {
    authors.map((author)=>(

    <div key={author._id} className='mx-auto border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col  items-center text-wrap  max-w-2xl max-h-96' >
      <img className='h-12 rounded-full' src={author.image} alt="" />
      <Link to={`/authors/${author._id}}`}><h3 className='mt-5 mb-5 text-2xl p-1 font-semibold'>{author.authorName}</h3> </Link>
      <span className='text-lg'>{author.details}</span>
    </div>

    ))} </div>


</section>

<section className="Home-Popular-Books-Section">


<div>
      <h1 className='mt-5 mb-10 font-bold text-4xl flex justify-center'>
        Popular Books
      </h1>
</div>

  
<div className='grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto  '>
  {slicedBooks.map((book)=>(
    <div key={book._id} className='flex justify-center '>
     <div className=' border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        <img className='' src={book.bookImage} alt="" />
        <Link to={`/books/${book._id}`}><h3 className='mt-5  text-2xl font-semibold'>{book.bookName}</h3> </Link>
        
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


<Book/>



</section>





</>
  )
}


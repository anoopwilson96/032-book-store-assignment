import React from 'react'
import {useLoaderData } from "react-router-dom";


export async function loader() {
  
    const response = await fetch('http://localhost:3000/authors')
    const authors = await response.json()
    return { authors}
  } 




export default function Authors() {
  const {authors} = useLoaderData();
  console.log(authors)

  return (
    <>
  <main className='container max-w-6xl mx-auto'>
    <div>
      <h1 className='mt-5 mb-10 font-bold text-4xl flex justify-center'>
        Popular Authors
      </h1>
    </div>



    <div className='grid grid-cols-1 md:grid-cols-3 gap-2  justify-center items-center mx-auto '>

    {
    authors.map((author)=>(

    <div key={author._id} className='mx-auto border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col  items-center text-wrap max-w-56' >
      <img className='h-10 rounded-full' src={author.image} alt="" />
      <h3 className='mt-5 mb-5 text-2xl font-semibold'>{author.authorName}</h3>
      <span className='text-lg'>{author.details}</span>
    </div>

    ))} </div>

    
    </main>

    
    
    
    
    </>
  )
}

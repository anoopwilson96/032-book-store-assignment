import React from 'react'
import {useLoaderData } from "react-router-dom";


export async function loader() {
  try {
    const response = await fetch('http://localhost:3000/authors')
    const authors = await response.json()
    console.log('Response:', response)
    return { authors}
    
  } catch (error) {
    console.log("Error in fetching")
    
  }
}



export default function Authors() {
  const {authors} = useLoaderData()

  return (
    <>
  <main className='container max-w-6xl mx-auto'>
    <div>
      <h1 className='mt-5 mb-10 font-bold text-4xl flex justify-center'>
        Popular Authors
      </h1>
    </div>



    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 '>


    <div className='flex justify-center '>
      <div className='border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        <img className='rounded-full' src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/arundhatistory_647_100316054702.jpg" alt="" />
        <h3 className='mt-5 mb-5 text-2xl font-semibold'>Arundhati Roy </h3>
        <span className='text-lg'>Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India</span>
      </div>
    </div>

    <div className='flex justify-center '>
      <div className='border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        <img className='rounded-full' src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/arundhatistory_647_100316054702.jpg" alt="" />
        <h3 className='mt-5 mb-5 text-2xl font-semibold'>Arundhati Roy </h3>
        <span className='text-lg'>Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India</span>
      </div>
    </div>
    <div className='flex justify-center '>
      <div className='border border-red-600 rounded-3xl shadow-slate-400 p-5 flex flex-col items-center justify-center text-wrap max-w-56' >
        <img className='rounded-full' src="https://d2g9wbak88g7ch.cloudfront.net/authorimages/arundhatistory_647_100316054702.jpg" alt="" />
        <h3 className='mt-5 mb-5 text-2xl font-semibold'>Arundhati Roy </h3>
        <span className='text-lg'>Arundhati Roy is an Indian writer, best known for her book The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997. She was born in Shillong, Meghalaya, India</span>
      </div>
    </div>





    </div>






    </main>

    
    
    
    
    </>
  )
}

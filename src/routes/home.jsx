import React from 'react'
import ImageSlider from '../components/imageSlider'
import Authors from './authors'
import { Outlet, Link } from "react-router-dom";
import Books from './books';



export default function Home() {
  return (
<>

<ImageSlider/>
{/* <Authors/> */}
<Books/>



</>
  )
}


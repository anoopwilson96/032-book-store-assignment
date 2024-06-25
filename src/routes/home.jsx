import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg" },
  { url: "https://cdn.pixabay.com/photo/2023/01/15/16/20/library-7720589_1280.jpg" },
  { url: "https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1491309055486-24ae511c15c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  
];


export default function Home() {
  return (
    <>
    
    
    <div className=' mt-5 mx-auto flex flex-row justify-center'>
      <SimpleImageSlider className=' object-cover'
        width={'100%'}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
    </>
  )
}

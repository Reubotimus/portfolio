import React from 'react'
import Image from 'next/image'

function carouselSimple() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={'/tinygrid5.png'} width={1920} height={1080} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle h-6 w-6">❮</a> 
          <a href="#slide2" className="btn btn-circle h-6 w-6">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={'/tinygrid.png'} width={1920} height={1080} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle h-6 w-6">❮</a> 
          <a href="#slide3" className="btn btn-circle h-6 w-6">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={'/tinygrid4.png'} width={1920} height={1080} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle h-6 w-6">❮</a> 
          <a href="#slide4" className="btn btn-circle h-6 w-6">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <Image src={'/tinygrid3.png'} width={1920} height={1080} className="w-full" alt=''/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle h-6 w-6">❮</a> 
          <a href="#slide1" className="btn btn-circle h-6 w-6">❯</a>
        </div>
      </div>
    </div>

  )
}

export default carouselSimple
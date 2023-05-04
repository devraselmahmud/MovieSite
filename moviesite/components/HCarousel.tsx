import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const HCarousel = () => {
  return (
    <div className='relative mt-5'>
        <div>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
                <div className='cacousel-slider'>
                    <img src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" 
                    alt="image carousel" 
                    loading='lazy'
                    className='h-65'
                    />
                </div>

                <div className='cacousel-slider'>
                    <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    alt="image carousel" 
                    loading='lazy'
                    className='h-65'
                    />
                </div>

                <div className='cacousel-slider'>
                    <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    alt="image carousel" 
                    loading='lazy'
                    className='h-65'
                    />
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default HCarousel
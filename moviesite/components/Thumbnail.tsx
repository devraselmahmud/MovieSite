import React from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'


interface Props{
    result: string
}



const Thumbnail:React.FC<Props> = ({result}) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
  return (
    <div className='mx-10 my-5 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image 
        layout='responsive'
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
        height={1080}
        width={1920}
        alt='thumbnail image'
        />

        <div>

          <p className='truncate max-w-md'>{result.overview}</p>
          
          <h2 className='mt-1 text-2xl transition-all duration-100 ease-out group-hover:font-bold'>
            {result.title || result.original_name}
          </h2>

          <p>
            {result.release_date || result.first_air_date} {" "}
            <HandThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
          </p>

        </div>

    </div>
  )
}

export default Thumbnail
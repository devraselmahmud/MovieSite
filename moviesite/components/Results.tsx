import React from 'react'
import Thumbnail from './Thumbnail'
interface Props{
    results: string
    result: any
    index:number
}

const Results:React.FC<Props> = ({results}) => {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {results.map((result, index)=>(
            <Thumbnail key={index} result={result}/>
        ))}
    </div>
  )
}

export default Results
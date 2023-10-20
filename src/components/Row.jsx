import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'

const Row = ({title, fetchURL}) => {
    //state
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((res)=> {
            setMovies(res.data.results)
            console.log(res.data.results);
        })
    },[fetchURL])
  return (
    <>
     <h2 className='text-white font-bold p-4 md:text-xl'>{title}</h2>
     <div className='relative flex items-center'>
        <div id='slider'>
            {movies.map((item,id) => (
                <Movies item={item} id={id}/>
            ))}

        </div>

     </div>
      
    </>
  )
}

export default Row

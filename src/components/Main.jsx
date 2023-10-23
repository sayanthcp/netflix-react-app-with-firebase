import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
            // console.log(response.data.results);
        })
    },[])
    // console.log(movie);

    //trim the overview
    const trunkCate = (str, num) => {
        // if(str?.length > num){
        //     return str.slice(0, num) + '...' ;
        // } else {
        //     return str ;
        // }   
    return  str?.length > num ? str.slice(0, num) + '...' : str
    }
    
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />   
        </div>

        <div className='absolute top-[20%] w-full p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black px-5 py-2 cursor-pointer border-gray-300'>Play</button>
            <button className='border bg-black text-white px-5 py-2 cursor-pointer border-gray-300 ml-4'>Watch Later</button>
          </div>
          <p className='text-gray-400 font-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{trunkCate(movie?.overview, 150)}</p>
        </div>
      
    </div>
  )
}

export default Main

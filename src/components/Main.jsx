import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
  //state
    const [mainMovies, setMainMovies] = useState([])

    const movie = mainMovies[Math.floor(Math.random() * mainMovies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
          setMainMovies(response.data.results)
        })
    },[])
  
    //trim the overview
    const trunkcateOverview = (str, num) => {     
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
            <button className='border bg-gray-300 text-black px-5 py-2 cursor-pointer border-gray-300 hover:opacity-50'>Play</button>
            <button className='border bg-black text-white px-5 py-2 cursor-pointer border-gray-300 ml-4 hover:opacity-50'>Watch Later</button>
          </div>
          <p className='text-gray-400 font-sm'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{trunkcateOverview(movie?.overview, 150)}</p>
        </div>
      
    </div>
  )
}

export default Main

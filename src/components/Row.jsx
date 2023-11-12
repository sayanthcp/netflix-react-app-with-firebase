import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Youtube from 'react-youtube'
import {key} from '../Requests'

const Row = ({title, fetchURL,rowId}) => {
    //state
    const [movies, setMovies] = useState([])
    const [UrlId,setUrlId] = useState("")

    useEffect(()=>{
        axios.get(fetchURL).then((res)=> {
            setMovies(res.data?.results)
        })
    },[fetchURL])

    //slide rows in leftside
    const slideLeft = () => {
        const slide = document.getElementById('slider' + rowId)
        slide.scrollLeft = slide.scrollLeft - 500
    }

    //slide row in rightside
    const slideRight = () => {
        const slide = document.getElementById('slider' + rowId)
        slide.scrollLeft = slide.scrollLeft + 500
    }

    //show trailer handler
    const showTrailerHandler = (movieId) => {
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`).then((response)=>{
        if(response.data?.results.length !==0){
          setUrlId(response.data?.results[0])
          console.log(response.data);
        }else{
          console.log("NO movies found");
        }
      })
    }

    //youtube screen player
    const opts = {
      height: '500',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };

  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={'slider' + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((item, id) => (

            <Movies item={item} key={id} showTrailerHandler={showTrailerHandler}/>

          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />

      </div>

      {/* youtube trailers*/}
      
        {UrlId && <Youtube opts={opts} videoId={UrlId?.key} />}   
          
      
    </>

  );
}

export default Row

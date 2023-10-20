import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL,rowId}) => {
    //state
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((res)=> {
            setMovies(res.data.results)
            console.log(res.data.results);
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
          {movies.map((item, id) => (
            <Movies item={item} id={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
}

export default Row

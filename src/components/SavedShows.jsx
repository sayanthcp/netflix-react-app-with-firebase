import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {db} from '../firebase'
import {updateDoc,doc, onSnapshot} from 'firebase/firestore'
import { userAuth } from "../context/AuthContext";
import {AiOutlineCloseCircle} from 'react-icons/ai'

const SavedShows = () => {
    const [movies,setMovies] = useState([])

    const {user} = userAuth()

     //slide rows in leftside
     const slideLeft = () => {
        const slide = document.getElementById('slider')
        slide.scrollLeft = slide.scrollLeft - 500
    }

    //slide row in rightside
    const slideRight = () => {
        const slide = document.getElementById('slider')
        slide.scrollLeft = slide.scrollLeft + 500
    }

    //added movies in fav list
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=>{
            setMovies(doc.data()?.moviesList)
        })
    },[user?.email])

    //delete movies from database and fav list
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
          const result = movies.filter((item) => item.id !== passedID)
          await updateDoc(movieRef,{moviesList : result})
        }catch(error){
            console.log(error);
        }
    }

    
  return (
    <div>
      <h2 className="text-white font-bold p-4 md:text-xl">My Favorites List</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer   relative p-2"
            >
              <img
                className="w-full h-full block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt="images"
              />
              <div className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/80 opacity-0 hover:opacity-100">
                <p className="whitespace-normal flex justify-center items-center text-center text-xs md:text-sm font-bold h-full">
                  {item?.title}
                </p>
                    <AiOutlineCloseCircle onClick={()=> deleteShow(item.id)} size={25} className="absolute top-4 right-4 text-gray-300" />
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default SavedShows;

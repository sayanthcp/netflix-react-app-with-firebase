import React, { useState } from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import {db} from '../firebase'
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import {userAuth} from '../context/AuthContext'



const Movies = ({item, id, showTrailerHandler}) => {
    //state
    const [like, setLike] = useState(false)
    const [savedMovies, setSavedMovies] = useState(false)

    const {user} = userAuth()

    const movieID = doc(db, 'users', `${user?.email}`)

    const showMovie = async () => {
      if(user?.email){
        setLike(!like)
      setSavedMovies(true)
        await updateDoc(movieID, {moviesList : arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        })})
      }else {
        alert('please sign in and save movies')
      }

    }


  return (
    <div onClick={()=>showTrailerHandler(item?.id)}
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer   relative p-2"
    >
      <img 
        className="w-full h-full block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt="images"
      />
      <div className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal flex justify-center items-center text-center text-xs md:text-sm font-bold h-full">
          {item?.title}
        </p>
        <p onClick={showMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-red-600" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movies;

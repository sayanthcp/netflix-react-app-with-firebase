import React, { useState } from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa'


const Movies = ({item, id}) => {
    //state
    const [like, setLike] = useState(false)

  return (
    <div
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer   relative p-2"
    >
      <img
        className="w-full h-full block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt="images"
      />
      <div className="absolute top-0 left-0 w-full h-full text-white hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="flex justify-center items-center text-center text-xs md:text-sm font-bold h-full">
          {" "}
          {item?.title}
        </p>
        <p>
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

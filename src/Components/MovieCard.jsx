import React from 'react'
const IMAGE_URL = "https://image.tmdb.org/t/p/original"
function MovieCard({movie}) {
  return (
    <div >
             <img src={IMAGE_URL+movie.poster_path} 
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-90 transition-all duration-150 ease-in' />
    </div>
  )
}

export default MovieCard

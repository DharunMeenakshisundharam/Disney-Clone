import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
const screenwidth = window.innerWidth;
function MovieList({genereId}) 
{
    const [movieList,setMovieList]=useState([])
    const elementRef = useRef(null)

    useEffect(()=>getMovieByGenreId(),[])
    const getMovieByGenreId=()=>
    {
        GlobalApi.getMovieByGenreId(genereId).then(resp=>
        {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>
    {
        element.scrollLeft+=screenwidth-110
    }
    const slideLeft=(element)=>
    {
        element.scrollLeft-=screenwidth-110
    }
  return (
    <div className='relative'> 
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className="text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute mt-[150px]
          "/>

    <div  ref={elementRef}className='overflow-x-auto scrollbar-none scroll-smooth'>
    <div className='flex gap-8 md:w-[500%] w-[800%]'>
            {movieList.map((item,index)=>
            (
                <MovieCard movie={item}/>
            ))}
    </div>
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className="text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0  mt-[150px]
            "/> 
    </div>
  )
}

export default MovieList

import React, { useEffect, useReducer, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_URL = "https://image.tmdb.org/t/p/original"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const screenwidth = window.innerWidth;
function Sliders() 
{
    const [movielist,setmovielist]=useState([]);

    const elementRef = useRef()
    useEffect(()=>
    {
        getTreadingvideos();

    },[])

    const getTreadingvideos=()=>
    {
        GlobalApi.getTreadingvideos.then(resp=>
        {
            console.log(resp.data.results);
            setmovielist(resp.data.results)
        })
    }


    const SliderRight=(element)=>
    {
        element.scrollLeft+=screenwidth-110
    }
    const SliderLeft=(element)=>
    {
        element.scrollLeft-=screenwidth-110
    }
  return (
    <div>
        <HiChevronLeft className='text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block ' onClick={()=>SliderLeft(elementRef.current)}/>
        <HiChevronRight className='text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 hidden md:block ' onClick={()=>SliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
       {movielist.map((items,index)=>
    (
        <img src={IMAGE_URL+items.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5  rounded-lg hover:border-[4px] border- grey-400 transition-all duration-100 ease-in'/>
    ))}
    </div>
    </div>
  )
}

export default Sliders

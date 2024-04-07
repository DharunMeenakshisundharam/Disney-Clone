import React, { useState } from 'react'
import logo from "../assets/Images/logo.png"
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from 'react-icons/hi2'
import {HiPlus,HiDotsVertical} from "react-icons/hi"
import Headeritem from './Headeritem'
function Header() 
{
  const [toggle,setToggle]=useState(false)
  const menu=[
    {
      name:"HOME",
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icon:HiTv
    }
  ]
  return (
    <div className='flex items-center  justify-between p-6'>
      <div className='flex items-center gap-9'>
                <img src={logo} className='w-[80px] md:w-[155px] object-cover'/>
                <div className=' hidden md:flex gap-8'> 
                      {menu.map((item)=>
                    ( 
                      <Headeritem name={item.name} Icon={item.icon}/> 
                    ))}
              </div>
              <div className='flex  md:hidden gap-5'> 
                      {menu.map((item,index)=> index<3&&
                    ( 
                      <Headeritem name={''} Icon={item.icon}/> 
                    ))}
              </div>
              <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
                 <Headeritem name={''} Icon={HiDotsVertical}/>
                 {toggle ? 
                 <div className='absolute mt-2 bg-[#121212] border-[1px] p-2 border-grey-700 py-2 rounded'>
                 {menu.map((item,index)=> index>2&&
                    ( 
                      <Headeritem name={item.name} Icon={item.icon}/> 
                    ))}
              </div>: null}
              </div >
      </div>
              <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='md:w-[40px] w-[25px] rounded-full' />
    </div>
  
  )
}

export default Header

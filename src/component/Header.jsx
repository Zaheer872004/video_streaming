import React from 'react'

import { LuUserCircle2 } from "react-icons/lu";

const Header = () => {
  return (
    <div className=' absolute z-10 flex w-[100%] items-center justify-between
     bg-gradient-to-b from-black'>
      <img className='w-56' src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix-logo"/> 
      <div className=' flex gap-7 mr-5 '>
        
        <h1 className=' flex justify-start gap-2  text-white px-4 py-2 rounded-full' >{<LuUserCircle2 size = '24px'/>}Zaheer Khan</h1>
      <button className=' bg-red-800 text-white px-4 py-2 rounded-full'>Logout</button>
      <button className=' bg-green-800 text-white px-4 py-2 rounded-full'>Search movies</button>
      </div>
    </div>
  )
}

export default Header;
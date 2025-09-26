import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Heo = () => {
 
  return (
    <>
    <section className=' bg-[url("./assets/master-slides-02.jpg")] h-lvh w-full bg-cover bg-center bg-no-repeat absolute top-0 left-0 -z-10 group '>
        <div className="flex flex-col items-center justify-center text-white h-full w-full z-10 ">
          <div className='font-["Courgette",cursive] text-6xl italic md:text-7xl transition-all duration-500 animate-[translate-3d rotate]' >Welcome to</div>
        <div className="font-['Poppins', sans-serif] text-7xl text-center font-bold tracking-[0.75rem] uppercase mt-5 md:text-8xl">Pato Place</div>
        <div className="btn">
            <button className='bg-white text-[#ec1d25] text-lg px-7 py-2 mt-6 rounded-2xl cursor-pointer hover:bg-[#ec1d25] hover:text-white transition-colors duration-400 animate-pulse ' >Look Menu</button>
        </div>
        </div>
        <div className="flex justify-center items-center gap-2.5 -mt-10">
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
        </div>
        <div className='flex justify-between items-center -mt-70 px-5 md:px-20'>
        <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl ' ><MdOutlineKeyboardArrowLeft /></div>
        <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl ' ><MdKeyboardArrowRight /></div>
        </div>
    </section>
    </>
  )
}

export default Heo
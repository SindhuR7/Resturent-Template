import React from 'react'

import pics1 from '../assets/our-menu-01.jpg.webp'
import pics2 from '../assets/our-menu-05.jpg.webp'
import pics3 from '../assets/our-menu-08.jpg.webp'
import pics4 from '../assets/our-menu-10.jpg.webp'
import pics5 from '../assets/our-menu-13.jpg.webp'
import pics6 from '../assets/our-menu-16.jpg.webp'

const Menu = () => {
  return (
    <>
    <div className="bg-[#2125292f] flex flex-col justify-center items-center gap-3 pt-14 pb-12 md:pt-40 md:pb-20">
        <div className="font-['Courgette',cursive] italic text-2xl text-[#ec1a25]">Discover</div>
        <div className="font-['Poppins', sans-serif] text-5xl text-center font-bold tracking-widest mb-14 md:text-6xl">OUR MENU</div>
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
            <div className="w-110 rounded-4xl overflow-hidden relative group md:w-sm">
                <img className='w-full rounded-4xl hover:scale-120 transition-all duration-500' src={pics1} alt="" />
                <button className='absolute top-[40%] left-[30%] bg-[#ffffffc4] text-[#333333] rounded-2xl cursor-pointer uppercase px-7 py-2.5 text-2xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500'>Lunch</button>
            </div>
             <div className="w-110 rounded-4xl overflow-hidden relative group md:w-sm">
                <img className='w-full rounded-4xl hover:scale-120 transition-all duration-500' src={pics2} alt="" />
                <button className='absolute top-[40%] left-[30%] bg-[#ffffffc4] text-[#333333] rounded-2xl cursor-pointer uppercase px-7 py-2.5 text-2xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500'>dinner</button>
            </div>
            <div className='flex flex-col gap-3'>
                <div className="w-110 rounded-3xl overflow-hidden relative group md:w-sm">
                    <img className='w-full hover:scale-120 transition-all duration-500' src={pics3} alt="" />
                    <button className='absolute top-[40%] left-[30%] bg-[#ffffffc4] text-[#333333] rounded-2xl cursor-pointer uppercase px-7 py-2.5 text-2xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500'>drink</button>
                </div>
                <div className="w-110 rounded-3xl overflow-hidden relative group md:w-sm">
                    <img className='w-full hover:scale-120 transition-all duration-500' src={pics4} alt="" />
                    <button className='absolute top-[40%] left-[30%] bg-[#ffffffc4] text-[#333333] rounded-2xl cursor-pointer uppercase px-7 py-2.5 text-2xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500'>starter</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
            <div className="w-110 rounded-4xl overflow-hidden relative group md:w-3xl">
                <img className='w-full hover:scale-120 transition-all duration-500' src={pics5} alt="" />
                <button className='absolute top-[30%] left-[25%] bg-[#ffffffc4] text-[#333333] rounded-2xl cursor-pointer uppercase px-7 py-2.5 text-2xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500 md:top-[40%] md:left-[45%]'>happy tour</button>

            </div>
            <div className="w-110 rounded-3xl overflow-hidden relative group md:w-sm">
                <img className='w-full hover:scale-120 transition-all duration-500' src={pics6} alt="" />
                <button className='absolute top-[40%] left-[30%] bg-[#ffffffc4] text-[#333333] rounded-2xl cursor-pointer uppercase px-7 py-2.5 text-2xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500'>desert</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Menu
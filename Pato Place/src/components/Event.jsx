import React from 'react'
import image from '../assets/event-06.jpg'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Event = () => {
  return (
    <>
    <div className='h-250 w-full bg-[url(./assets/bg-event-02.jpg)] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center relative md:h-200'>
        <div className="font-['Courgette',cursive] italic text-2xl text-[#ec1a25]">Upcoming</div>
        <div className="font-['Poppins', sans-serif] text-5xl text-white text-center font-bold tracking-widest mb-14 md:text-6xl">EVENTS</div>
        <div className='flex justify-center flex-col items-center bg-white rounded-3xl md:flex-row'>
            <div className='w-110 relative md:w-xl'>
                <img className='w-full rounded-t-2xl md:rounded-l-3xl' src={image} alt="" />
                <div className='absolute flex justify-center top-[0%] left-[o%] bg-[#ec1a24c2] py-3 px-13.5 text-center rounded-t-2xl text-lg text-white md:left-[-27.8%] md:top-[42.5%] md:px-6.5 md:text-lg md:transform md:rotate-90 md:rounded-b-2xl'>10:00 PM TUESDAY - 23 SEPTEMBER 2025</div>
            </div>
            <div className='flex flex-col justify-center items-center px-1 py-2 md:px-10'>
                <h4 className='mt-3 mb-3 font-["Poppins",sans-serif] text-lg font-medium text-black cursor-pointer uppercase tracking-wider md:text-2xl'>WINES DURING SPECIAL NIGHTS</h4>
                <div className="font-['Montserrat',sans-serif] text-[#666666] text-sm w-sm text-center md:w-lg md:text-lg">Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</div>
                <div className=''>TIMER</div>
                <div className="flex justify-center items-center font-['Montserrat',sans-serif] text-[#666666] cursor-pointer text-center text-lg mt-8 uppercase">view details<MdOutlineArrowRightAlt /></div>
            </div>
        </div>
        <div className='flex justify-between items-center  px-5 gap-85 absolute top-[54%] md:gap-270'>
                <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl cursor-pointer hover:bg-[#ec1a25] transition-all duration-500 ' ><MdOutlineKeyboardArrowLeft /></div>
                <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl cursor-pointer hover:bg-[#ec1a25] transition-all duration-500 ' ><MdKeyboardArrowRight /></div>
        </div>
         <div className="flex justify-center items-center gap-2.5 mt-30">
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
        </div>
    </div>
    </>
  )
}

export default Event
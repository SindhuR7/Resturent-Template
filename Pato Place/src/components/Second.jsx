import React from 'react'
import image from '../assets/our-story-01.jpg.webp'
import { MdOutlineArrowRightAlt } from "react-icons/md";


const Second = () => {
  return (
    <>
    <section className='flex flex-col justify-center items-center mt-125 bg-[#2125292f] py-24 gap-15 md:flex-row md:gap-25'>
        <div className="flex flex-col items-center justify-center">
            <div className='font-["Courgette",cursive] italic text-2xl text-[#ec1a25] md:text-3xl'>Italian Resturant</div>
            <div className="font-['Poppins', sans-serif] text-6xl text-center font-bold tracking-widest mt-2 mb-10">WELCOME</div>
            <div className="font-['Montserrat',sans-serif] text-[#666666] text-lg w-sm text-center md:w-lg">Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</div>
            <div className="flex justify-center items-center font-['Montserrat',sans-serif] text-[#666666] cursor-pointer text-center text-lg mt-8 hover:text-[#ec1a25] transition-colors duration-500 md:mt-14">Our Story <MdOutlineArrowRightAlt /></div>
        </div>
        <div className="w-sm overflow-hidden rounded-3xl">
            <img className='w-full hover:scale-120 cursor-pointer transition-transform duration-500' src={image} alt="Story" />
        </div>
    </section>
    </>
  )
}

export default Second
import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Review = () => {
  return (
    <>
    <div className='h-200 flex justify-center items-center relative'>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <div className='font-["Courgette",cursive] italic text-2xl text-[#ec1a25] md:text-3xl'>Customer Say</div>
            <div className="font-['Poppins', sans-serif] text-6xl text-center font-bold tracking-widest ">REVIEW</div>
            <div className='h-25 w-25 rounded-full border-4 border-[#ec1a25] bg-[url("./assets/avatar-05.jpg")] bg-cover bg-center bg-no-repeat' > </div>
            <div className=' text-center flex justify-center items-center px-5 mt-7 text-gray-500 text-xl md:px-45'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sequi, quibusdam illum voluptate delectus fugiat. Dicta, labore. Perferendis ratione eius repellendus iusto voluptatem provident, voluptate similique nulla. Culpa, voluptatem."</div>
            <div className='flex justify-center items-center text-[#ec1a25] text-xl mt-4'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
              <div className='text-gray-500 text-xl'>Maria Simmons - New York</div>
                <div className="flex justify-center items-center gap-2.5 py-4 ">
                  <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
                  <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
                  <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
              </div>
              <div className='flex justify-between items-center absolute top-[50%] px-5 gap-70 md:px-20  md:gap-260'>
                <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl  hover:bg-[#ec1a25] transition-all duration-500 cursor-pointer' ><MdOutlineKeyboardArrowLeft /></div>
                <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl hover:bg-[#ec1a25] transition-all duration-500 cursor-pointer' ><MdKeyboardArrowRight /></div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Review
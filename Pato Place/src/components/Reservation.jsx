import React from 'react'
import image from '../assets/booking-01.jpg'
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Reservation = () => {
  return (
    <> 
       <section className='flex flex-col justify-center items-center bg-[#2125292f] py-24 gap-15 md:flex-row md:gap-25'>
            <div className="flex flex-col items-center justify-center">
                <div className='font-["Courgette",cursive] italic text-2xl text-[#ec1a25] md:text-3xl'>Reservation</div>
                <div className="font-['Poppins', sans-serif] text-6xl text-center font-bold tracking-widest mt-2 mb-10">BOOK TABLE</div>
                <div className='flex justify-between items-center gap-3'>
                    <div className='flex flex-col'>
                        <label  className='text-lg text-[#333333] mb-2' htmlFor="Date">Date </label>
                             <input className='w-2xs rounded-lg border-2 border-white shadow-amber-50 px-5 py-2 text-xl bg-white outline-[#ec1a25] focus:border-[#ec1a25]' type="number" placeholder='23/09/2025'/>
                    </div>
                     <div className='flex flex-col'>
                        <label  className='text-lg text-[#333333] mb-2' htmlFor="Date">Name </label>
                             <input className='w-2xs rounded-lg border-2 border-white shadow-amber-50 px-5 py-2 text-xl text-black bg-white outline-[#ec1a25] outline-none focus:border-[#ec1a25]' type="text" placeholder='Name'/>
                    </div>
                </div>
                 <div className='flex justify-between items-center gap-3'>
                    <div className='flex flex-col'>
                        <label  className='text-lg text-[#333333] mb-2' htmlFor="Date">Time </label>
                             <input className=' w-2xs rounded-lg border-2 border-white shadow-amber-50 px-5 py-2 text-xl bg-white outline-none outline-[#ec1a25] focus:border-[#ec1a25]' type="time" />
                    </div>
                     <div className='flex flex-col'>
                        <label  className='text-lg text-[#333333] mb-2' htmlFor="Date">Phone</label>
                             <input className='w-2xs rounded-lg border-2 border-white shadow-amber-50 px-5 py-2 text-xl text-black bg-white outline-none outline-[#ec1a25] focus:border-[#ec1a25]' type="text" placeholder='Phone'/>
                    </div>
                </div>
                 <div className='flex justify-between items-center gap-3'>
                    <div className='flex flex-col'>
                        <label  className='text-lg text-[#333333] mb-2' htmlFor="Date">People </label>
                             <input  className='w-2xs rounded-lg border-2 border-white shadow-amber-50 px-5 py-2 text-xl bg-white outline-none outline-[#ec1a25] focus:border-[#ec1a25]' type="number" placeholder='0'/>
                    </div>
                     <div className='flex flex-col'>
                        <label  className='text-lg text-[#333333] mb-2' htmlFor="Date">Email </label>
                             <input className='w-2xs rounded-lg border-2 border-white shadow-amber-50 px-5 py-2 text-xl text-black bg-white outline-none outline-[#ec1a25] focus:border-[#ec1a25]' type="email" placeholder='Email'/>
                    </div>
                </div>
                <div className='mt-15'>
                    <button className='bg-black px-8 py-2 text-white text-sm rounded-lg'>Book Table</button>
                </div>
             </div>
            <div className="w-sm overflow-hidden rounded-3xl">
                <img className='w-full hover:scale-120 cursor-pointer transition-transform duration-500' src={image} alt="Story" />
            </div>
        </section>
    </>
  )
}

export default Reservation
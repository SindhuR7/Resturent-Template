import React from 'react'
import { IoPlayCircle } from "react-icons/io5";


const Discover = () => {
  return (
    <>
    <div className='bg-[url("./assets/bg-cover-video-02.jpg")] bg-center bg-cover bg-no-repeat h-140 w-full bg-fixed flex flex-col justify-center items-center'>
        <div className='font-["Courgette",cursive] italic text-4xl text-[#ec1a25]'>Dicover</div>
        <div className='font-["Poppins", sans-serif] text-6xl text-center font-bold tracking-widest mt-2 mb-10 text-white'>OUR VIDEO </div>
        <div className='text-9xl text-white cursor-pointer hover:text-[#ec1a25] transition-all duration-500'><IoPlayCircle /></div>
    </div>
    </>
  )
}

export default Discover
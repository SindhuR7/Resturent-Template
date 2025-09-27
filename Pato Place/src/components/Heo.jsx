import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import image1 from '../assets/slide1-01.jpg';
import image2 from '../assets/master-slides-02.jpg';

  const images = [image1, image2]

  const animations = [
  { initial: { opacity: 0, y: -100, rotate: -15 }, animate: { opacity: 1, y: 0, rotate: 0 } },
  { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } },
  { initial: { opacity: 0, x: 200 }, animate: { opacity: 1, x: 0 } },
];
const Heo = () => {
const [index, setIndex] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 2000);
  return () => clearInterval(timer);
}, []);

 const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

   const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
 
  return (
    <>
    <section className=' h-lvh w-full bg-cover bg-center bg-no-repeat absolute top-0 left-0 -z-10 ' style={{ backgroundImage: `url(${images[index]})` }} >
      <div className="flex flex-col items-center justify-center text-white h-full w-full z-10 ">
          <motion.div
          key={index} // only text changes animate
          initial={animations[index % animations.length].initial}
          animate={animations[index % animations.length].animate}
          exit={{ opacity: 0, y: 50 }} // how it leaves
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className='font-["Courgette",cursive] text-6xl italic md:text-7xl transition-all duration-500 animate-[translate-3d rotate]' >Welcome to</div>
        <div className="font-['Poppins', sans-serif] text-7xl text-center font-bold tracking-[0.75rem] uppercase mt-5 md:text-8xl">Pato Place</div>
        <div className="btn">
            <button className='bg-white text-[#ec1d25] text-lg px-7 py-2 mt-6 rounded-2xl cursor-pointer hover:bg-[#ec1d25] hover:text-white transition-colors duration-400 animate-pulse ' >Look Menu</button>
        </div>
        </motion.div>
        </div>
         <div className="flex justify-center items-center gap-2 mt-4">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-red-600 border-2 border-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
        {/* <div className="flex justify-center items-center gap-2.5 -mt-10">
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-lg cursor-pointer hover:bg-red-600 hover:border-amber-100 hover:border-2 transition-all duration-300  border-1 border-transparent"></div>
        </div> */}

         <div className="absolute top-1/2 w-full flex justify-between px-5 md:px-20 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className=" h-12 w-12 rounded-full bg-[#00000073] flex items-center justify-center text-white text-2xl cursor-pointer hover:text-[#ec1a25] transition-all duration-200"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="h-12 w-12 rounded-full bg-[#00000073] flex items-center justify-center text-white text-2xl"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>

        {/* <div className='flex justify-between items-center -mt-70 px-5 md:px-20'>
        <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl ' ><MdOutlineKeyboardArrowLeft /></div>
        <div className='h-14 w-14 rounded-4xl bg-[#00000073] flex items-center justify-center text-white text-xl ' ><MdKeyboardArrowRight /></div>
        </div> */}
    </section>
    </>
  )
}

export default Heo
import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Review = () => {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center relative bg-white px-4 py-20">
        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl text-center">
          {/* Section Heading */}
          <div className='font-["Courgette",cursive] italic text-2xl text-[#ec1a25] md:text-3xl'>
            Customer Say
          </div>
          <div className="font-['Poppins',sans-serif] text-4xl md:text-6xl font-bold tracking-widest">
            REVIEW
          </div>

          {/* Avatar */}
          <div className='h-24 w-24 rounded-full border-4 border-[#ec1a25] bg-[url("./assets/avatar-05.jpg")] bg-cover bg-center'></div>

          {/* Quote */}
          <p className="px-4 md:px-20 mt-7 text-gray-500 text-lg md:text-xl leading-relaxed">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil sequi, quibusdam illum voluptate delectus fugiat. Dicta, labore. Perferendis ratione eius repellendus iusto voluptatem provident, voluptate similique nulla. Culpa, voluptatem."
          </p>

          {/* Stars */}
          <div className="flex justify-center items-center text-[#ec1a25] text-2xl mt-4">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>

          {/* Name */}
          <div className="text-gray-500 text-lg md:text-xl">
            Maria Simmons - New York
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3 py-6">
            <div className="h-3 w-3 bg-gray-400 rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300"></div>
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute inset-x-0 top-1/2 flex justify-between px-4 md:px-20">
          <button className="h-12 w-12 rounded-full bg-black/50 flex items-center justify-center text-white text-xl hover:bg-[#ec1a25] transition-all duration-500">
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className="h-12 w-12 rounded-full bg-black/50 flex items-center justify-center text-white text-xl hover:bg-[#ec1a25] transition-all duration-500">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Review;

import React from "react";
import { IoPlayCircle } from "react-icons/io5";

const Discover = () => {
  return (
    <>
      <section className='bg-[url("./assets/bg-cover-video-02.jpg")] bg-center bg-cover bg-no-repeat w-full flex flex-col justify-center items-center text-center px-6 py-24 sm:py-32 md:py-40'>
        {/* Subtitle */}
        <div className='font-["Courgette",cursive] italic text-2xl sm:text-3xl md:text-4xl text-[#ec1a25]'>
          Discover
        </div>

        {/* Title */}
        <h2 className='font-["Poppins",sans-serif] text-3xl sm:text-4xl md:text-6xl font-bold tracking-widest mt-3 mb-8 text-white'>
          OUR VIDEO
        </h2>

        {/* Play Button */}
        <div className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white cursor-pointer hover:text-[#ec1a25] transition-all duration-500'>
          <IoPlayCircle />
        </div>
      </section>
    </>
  );
};

export default Discover;


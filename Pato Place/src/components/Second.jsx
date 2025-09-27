import React from "react";
import image from "../assets/our-story-01.jpg.webp";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Second = () => {
  return (
    <>
      <section className="flex flex-col-reverse justify-center mt-126 items-center bg-[#2125292f] py-16 px-6 gap-12 md:flex-row md:gap-16 lg:py-24 lg:px-20">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <div className="font-['Courgette',cursive] italic text-2xl text-[#ec1a25] md:text-3xl">
            Italian Restaurant
          </div>
          <h2 className="font-['Poppins',sans-serif] text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest mt-2 mb-8">
            WELCOME
          </h2>
          <p className="font-['Montserrat',sans-serif] text-[#666] text-sm sm:text-base md:text-lg leading-relaxed">
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis ligula sem id neque.
          </p>
          <div className="flex justify-center md:justify-start items-center font-['Montserrat',sans-serif] text-[#666] cursor-pointer text-lg mt-8 hover:text-[#ec1a25] transition-colors duration-500">
            Our Story <MdOutlineArrowRightAlt className="ml-2 text-xl" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-3xl">
          <img
            className="w-full h-full object-cover hover:scale-110 cursor-pointer transition-transform duration-500"
            src={image}
            alt="Story"
          />
        </div>
      </section>
    </>
  );
};

export default Second;

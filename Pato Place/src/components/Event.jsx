import React from "react";
import image from "../assets/event-06.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CounterClock from "./CounterClock";

const Event = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[url('./assets/bg-event-02.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center relative px-4 py-10 md:py-20">
        {/* Heading */}
        <div className="font-['Courgette',cursive] italic text-2xl text-[#ec1a25]">
          Upcoming
        </div>
        <div className="font-['Poppins',sans-serif] text-4xl md:text-6xl text-white text-center font-bold tracking-widest mb-10">
          EVENTS
        </div>

        {/* Event Card */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-5xl">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
              src={image}
              alt="Event"
            />
            <div className="absolute top-0 left-0 md:-left-28 md:top-1/2 md:-translate-y-1/2 bg-[#ec1a24c2] py-2 px-6 text-center text-sm md:text-base text-white rounded-t-2xl md:rounded-b-2xl md:rotate-90">
              10:00 PM TUESDAY - 23 SEPTEMBER 2025
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center p-6 md:w-1/2 text-center">
            <h4 className="mt-3 mb-3 font-['Poppins',sans-serif] text-lg md:text-2xl font-medium text-black uppercase tracking-wider cursor-pointer">
              WINES DURING SPECIAL NIGHTS
            </h4>
            <p className="font-['Montserrat',sans-serif] text-[#666666] text-sm md:text-lg mb-6">
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
              ac facilisis ligula sem id neque.
            </p>

            <CounterClock />

            <div className="flex items-center gap-2 font-['Montserrat',sans-serif] text-[#666666] cursor-pointer text-lg mt-8 uppercase hover:text-[#ec1a25] transition-colors">
              View Details <MdOutlineArrowRightAlt />
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-between items-center w-full max-w-6xl px-5 absolute top-1/2 -translate-y-1/2">
          <div className="h-14 w-14 rounded-full bg-[#00000073] flex items-center justify-center text-white text-xl cursor-pointer hover:bg-[#ec1a25] transition-all duration-500">
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className="h-14 w-14 rounded-full bg-[#00000073] flex items-center justify-center text-white text-xl cursor-pointer hover:bg-[#ec1a25] transition-all duration-500">
            <MdKeyboardArrowRight />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <div className="h-3 w-3 bg-gray-400 rounded-full cursor-pointer hover:bg-red-600 border border-transparent hover:border-white transition-all duration-300"></div>
          <div className="h-3 w-3 bg-gray-400 rounded-full cursor-pointer hover:bg-red-600 border border-transparent hover:border-white transition-all duration-300"></div>
          <div className="h-3 w-3 bg-gray-400 rounded-full cursor-pointer hover:bg-red-600 border border-transparent hover:border-white transition-all duration-300"></div>
        </div>
      </div>
    </>
  );
};

export default Event;

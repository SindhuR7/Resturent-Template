import React from "react";

import pics1 from "../assets/our-menu-01.jpg.webp";
import pics2 from "../assets/our-menu-05.jpg.webp";
import pics3 from "../assets/our-menu-08.jpg.webp";
import pics4 from "../assets/our-menu-10.jpg.webp";
import pics5 from "../assets/our-menu-13.jpg.webp";
import pics6 from "../assets/our-menu-16.jpg.webp";

const Menu = () => {
  return (
    <>
      <section className="bg-[#2125292f] flex flex-col justify-center items-center gap-8 pt-14 pb-12 md:pt-28 md:pb-20 px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="font-['Courgette',cursive] italic text-2xl text-[#ec1a25]">
            Discover
          </p>
          <h2 className="font-['Poppins',sans-serif] text-4xl md:text-6xl font-bold tracking-widest text-[#111] mt-2">
            OUR MENU
          </h2>
        </div>

        {/* First Row */}
        <div className="flex flex-col md:flex-row md:justify-center gap-6">
          {/* Lunch */}
          <div className="relative group w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-3xl transform group-hover:scale-110 transition-all duration-500"
              src={pics1}
              alt="Lunch"
            />
            <button className="absolute inset-0 flex justify-center items-center bg-[#ffffffc4] text-[#333] rounded-2xl cursor-pointer uppercase px-6 py-2.5 text-xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500">
              Lunch
            </button>
          </div>

          {/* Dinner */}
          <div className="relative group w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-3xl transform group-hover:scale-110 transition-all duration-500"
              src={pics2}
              alt="Dinner"
            />
            <button className="absolute inset-0 flex justify-center items-center bg-[#ffffffc4] text-[#333] rounded-2xl cursor-pointer uppercase px-6 py-2.5 text-xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500">
              Dinner
            </button>
          </div>

          {/* Drinks & Starter */}
          <div className="flex flex-col gap-6">
            <div className="relative group w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-3xl transform group-hover:scale-110 transition-all duration-500"
                src={pics3}
                alt="Drink"
              />
              <button className="absolute inset-0 flex justify-center items-center bg-[#ffffffc4] text-[#333] rounded-2xl cursor-pointer uppercase px-6 py-2.5 text-xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500">
                Drink
              </button>
            </div>

            <div className="relative group w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-3xl transform group-hover:scale-110 transition-all duration-500"
                src={pics4}
                alt="Starter"
              />
              <button className="absolute inset-0 flex justify-center items-center bg-[#ffffffc4] text-[#333] rounded-2xl cursor-pointer uppercase px-6 py-2.5 text-xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500">
                Starter
              </button>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row md:justify-center gap-6">
          {/* Happy Hour */}
          <div className="relative group w-full max-w-lg md:max-w-xl rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-3xl transform group-hover:scale-110 transition-all duration-500"
              src={pics5}
              alt="Happy Hour"
            />
            <button className="absolute inset-0 flex justify-center items-center bg-[#ffffffc4] text-[#333] rounded-2xl cursor-pointer uppercase px-6 py-2.5 text-xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500">
              Happy Hour
            </button>
          </div>

          {/* Dessert */}
          <div className="relative group w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-3xl transform group-hover:scale-110 transition-all duration-500"
              src={pics6}
              alt="Dessert"
            />
            <button className="absolute inset-0 flex justify-center items-center bg-[#ffffffc4] text-[#333] rounded-2xl cursor-pointer uppercase px-6 py-2.5 text-xl font-semibold tracking-widest opacity-0 group-hover:opacity-100 hover:bg-[#ec1a25] hover:text-white transition-all duration-500">
              Dessert
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

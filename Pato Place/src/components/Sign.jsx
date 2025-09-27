import React from "react";
import { IoMdMail } from "react-icons/io";

const Sign = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center py-16 px-6 gap-6 bg-[#2125292f] md:flex-row md:gap-8">
        {/* Heading */}
        <div className="text-[#333333] text-2xl md:text-3xl font-semibold text-center md:text-left">
          Special Sign Up
        </div>

        {/* Input Field */}
        <div className="flex w-full max-w-md border border-black justify-between items-center px-4 py-2 rounded-2xl text-[#666666] bg-white">
          <input
            className="w-full border-none outline-none text-base md:text-lg"
            type="email"
            placeholder="Email Address"
          />
          <IoMdMail className="text-xl text-gray-500" />
        </div>

        {/* Button */}
        <div className="w-full max-w-[150px]">
          <button className="w-full bg-[#111111] px-6 py-3 text-white text-sm rounded-2xl hover:bg-[#ec1a25] transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </section>
    </>
  );
};

export default Sign;

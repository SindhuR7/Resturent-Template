import React from "react";
import image from "../assets/booking-01.jpg";

const Reservation = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[#2125292f] py-24 gap-10 md:flex-row md:gap-20">
        {/* Left Form Section */}
        <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4">
          <div className='font-["Courgette",cursive] italic text-2xl text-[#ec1a25] md:text-3xl'>
            Reservation
          </div>
          <div className="font-['Poppins', sans-serif] text-4xl md:text-6xl text-center font-bold tracking-widest mt-2 mb-10">
            BOOK TABLE
          </div>

          {/* First Row */}
          <div className="flex flex-col gap-5 w-full md:flex-row">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-lg text-[#333333] mb-2">Date</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-5 py-2 text-lg bg-white focus:ring-2 focus:ring-[#ec1a25]"
                type="text"
                placeholder="23/09/2025"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-lg text-[#333333] mb-2">Name</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-5 py-2 text-lg bg-white focus:ring-2 focus:ring-[#ec1a25]"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col gap-5 w-full mt-5 md:flex-row">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-lg text-[#333333] mb-2">Time</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-5 py-2 text-lg bg-white focus:ring-2 focus:ring-[#ec1a25]"
                type="time"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-lg text-[#333333] mb-2">Phone</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-5 py-2 text-lg bg-white focus:ring-2 focus:ring-[#ec1a25]"
                type="text"
                placeholder="Phone"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col gap-5 w-full mt-5 md:flex-row">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-lg text-[#333333] mb-2">People</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-5 py-2 text-lg bg-white focus:ring-2 focus:ring-[#ec1a25]"
                type="number"
                placeholder="0"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-lg text-[#333333] mb-2">Email</label>
              <input
                className="w-full rounded-lg border border-gray-300 px-5 py-2 text-lg bg-white focus:ring-2 focus:ring-[#ec1a25]"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Button */}
          <div className="mt-10">
            <button className="bg-black px-8 py-3 text-white text-sm rounded-lg hover:bg-[#ec1a25] transition duration-300">
              Book Table
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-md px-4">
          <img
            className="w-full rounded-3xl hover:scale-105 cursor-pointer transition-transform duration-500"
            src={image}
            alt="Reservation"
          />
        </div>
      </section>
    </>
  );
};

export default Reservation;

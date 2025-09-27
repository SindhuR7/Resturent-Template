import React from "react";
import pic1 from "../assets/intro-01.jpg.webp";
import pic2 from "../assets/intro-02.jpg.webp";
import pic3 from "../assets/intro-04.jpg.webp";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Rest = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center px-6 py-16 gap-10 md:flex-row md:flex-wrap md:gap-12 md:px-12 lg:px-20 lg:py-24">
        {/* Card 1 */}
        <div className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md">
          <div className="rounded-2xl overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
              src={pic1}
              alt="Romantic Restaurant"
            />
          </div>
          <div>
            <h4 className="mt-4 mb-3 font-['Poppins',sans-serif] text-xl sm:text-2xl font-medium text-[#333] cursor-pointer uppercase tracking-wider hover:text-[#ec1a25] transition-colors duration-500">
              Romantic Restaurant
            </h4>
            <p className="text-[#666] font-['Montserrat',sans-serif] text-base sm:text-lg mb-5">
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
            </p>
            <div className="flex items-center gap-2 text-[#333] hover:text-[#ec1a25] transition-colors duration-500 cursor-pointer">
              Learn more <MdOutlineArrowRightAlt />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md">
          <div className="rounded-2xl overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
              src={pic2}
              alt="Delicious Food"
            />
          </div>
          <div>
            <h4 className="mt-4 mb-3 font-['Poppins',sans-serif] text-xl sm:text-2xl font-medium text-[#333] cursor-pointer uppercase tracking-wider hover:text-[#ec1a25] transition-colors duration-500">
              Delicious Food
            </h4>
            <p className="text-[#666] font-['Montserrat',sans-serif] text-base sm:text-lg mb-5">
              Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna
            </p>
            <div className="flex items-center gap-2 text-[#333] hover:text-[#ec1a25] transition-colors duration-500 cursor-pointer">
              Learn more <MdOutlineArrowRightAlt />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md">
          <div className="rounded-2xl overflow-hidden cursor-pointer">
            <img
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
              src={pic3}
              alt="Red Wines you Love"
            />
          </div>
          <div>
            <h4 className="mt-4 mb-3 font-['Poppins',sans-serif] text-xl sm:text-2xl font-medium text-[#333] cursor-pointer uppercase tracking-wider hover:text-[#ec1a25] transition-colors duration-500">
              Red Wines you Love
            </h4>
            <p className="text-[#666] font-['Montserrat',sans-serif] text-base sm:text-lg mb-5">
              Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </p>
            <div className="flex items-center gap-2 text-[#333] hover:text-[#ec1a25] transition-colors duration-500 cursor-pointer">
              Learn more <MdOutlineArrowRightAlt />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rest;

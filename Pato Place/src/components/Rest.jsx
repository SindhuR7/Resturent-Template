import React from 'react'
import pic1 from '../assets/intro-01.jpg.webp'
import pic2 from '../assets/intro-02.jpg.webp'
import pic3 from '../assets/intro-04.jpg.webp'
import { MdOutlineArrowRightAlt } from "react-icons/md";


const Rest = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center px-10 py-20 gap-5 md:flex-row md:px-20 md:py-30">
        <div className="flex flex-col ">
            <div className="w-110 rounded-2xl overflow-hidden cursor-pointer md:w-sm">
                <img className='w-full hover:scale-120 transition-all duration-500' src={pic1} alt="" />
            </div>
            <div className="">
                <h4 className='mt-3 mb-3 font-["Poppins",sans-serif] text-2xl font-medium text-[#333333] cursor-pointer uppercase tracking-wider hover:text-[#ec1a25] transition-colors duration-500'>Romantic Resturant</h4>
                <p className='text-[#666666] font-["Montserrat", sans-serif] text-lg mt-2 mb-5'>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                <div className="flex justify-start items-center gap-3 text-[#333333] hover:text-[#ec1a25] transition-colors duration-500 cursor-pointer">Learn more<MdOutlineArrowRightAlt /></div>
            </div>
        </div>
        <div className="flex flex-col"> 
            <div className="w-110 rounded-2xl overflow-hidden cursor-pointer  md:w-sm">
                <img className='w-full hover:scale-120 transition-all duration-500' src={pic2} alt="" />
            </div>
            <div className="descr">
                <h4 className='mt-3 mb-3 font-["Poppins",sans-serif] text-2xl font-medium text-[#333333] cursor-pointer uppercase tracking-wider hover:text-[#ec1a25] transition-colors duration-500'>Delicious Food</h4>
                <p className='text-[#666666] font-["Montserrat", sans-serif] text-lg mt-2 mb-5'>Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna</p>
                <div className="flex justify-start items-center gap-3 text-[#333333] hover:text-[#ec1a25] transition-colors duration-500 cursor-pointer">Learn more<MdOutlineArrowRightAlt /></div>
            </div></div>
        <div className="flex flex-col">
             <div className="w-110 rounded-2xl overflow-hidden cursor-pointer  md:w-sm">
                <img className='w-full hover:scale-120 transition-all duration-500' src={pic3} alt="" />
            </div>
            <div className="descr">
                <h4 className='mt-3 mb-3 font-["Poppins",sans-serif] text-2xl font-medium text-[#333333] cursor-pointer uppercase tracking-wider hover:text-[#ec1a25] transition-colors duration-500'>Red Wines you Love</h4>
                <p className='text-[#666666] font-["Montserrat", sans-serif] text-lg mt-2 mb-5'>Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                <div className="flex justify-start items-center gap-3 text-[#333333] hover:text-[#ec1a25] transition-colors duration-500 cursor-pointer">Learn more<MdOutlineArrowRightAlt /></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Rest
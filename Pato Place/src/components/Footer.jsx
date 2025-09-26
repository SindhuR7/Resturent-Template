import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { LiaTripadvisor } from "react-icons/lia";

const Footer = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-[#111111e1] py-2 px-2'>
        <div>
            <ul className="flex items-center list-style-type: none gap-3">
                <li className='hover:text-red-600 transition-colors'><a href="#"><LiaTripadvisor /></a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#"><FaFacebookF /></a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#"><TiSocialTwitter /></a></li>
            </ul>
        </div>
        <div className='text-[#666666]'>
            @ 2017 Colorlib.  <span className=' cursor-pointer hover:text-[#ec1a25] transition-all duration-200'>Get The Theme</span>
        </div>
    </div>
    </>
  )
}

export default Footer
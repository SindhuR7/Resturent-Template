import React from 'react'
import logo from '../assets/logo.png.webp'
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { CiMenuFries } from "react-icons/ci";
import { LiaTripadvisor } from "react-icons/lia";


const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center bg-transparent  py-6 px-6  md:px-16'>
        <div >
            <img className=" transition-none cursor-pointer h-11 md:h-full" src={logo} alt="Pato" />
        </div>
        <div className=''>
            <ul className='hidden md:flex items-center list-style-type: none gap-14  text-white text-lg font-serif '>
                <li className='hover:text-red-600 transition-colors'><a href="#">Home</a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#">Menu</a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#">Reservation</a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#">Gallery</a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#">About</a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#">Blog</a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#">Contact</a></li>
            </ul>
        </div>
        <div >
            <ul className="flex items-center list-style-type: none gap-3 text-white text-lg md:gap-7 md:text-2xl">
                <li className='hover:text-red-600 transition-colors'><a href="#"><LiaTripadvisor /></a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#"><FaFacebookF /></a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#"><TiSocialTwitter /></a></li>
                <li className='hover:text-red-600 transition-colors'><a href='#'><CiMenuFries /></a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
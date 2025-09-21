import React from 'react'
import logo from '../assets/logo.png.webp'


const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center bg-amber-400 py-3.5 px-16'>
        <div >
            <img className=" transition-none" src={logo} alt="Pato" />
        </div>
        <div className="center">
            <ul className='flex items-center list-style-type: none gap-14  text-white text-lg font-serif'>
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
            <ul className="flex items-center list-style-type: none gap-7 text-white text-base">
                <li className='hover:text-red-600 transition-colors'><a href="#"><i class="fa-solid fa-alarm-clock"></i></a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li className='hover:text-red-600 transition-colors'><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li className='hover:text-red-600 transition-colors'><a href='#'><i class="fa-solid fa-bars"></i></a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
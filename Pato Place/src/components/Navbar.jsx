import React from 'react'
import logo from '../assets/logo.png.webp'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="left">
            <img src={logo} alt="Pato" />
        </div>
        <div className="center">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="right">
            <ul>
                <li><a href="#"><i class="fa-solid fa-alarm-clock"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href='#'><i class="fa-solid fa-bars"></i></a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar
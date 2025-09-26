import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import pic1 from '../assets/photo-gallery-thumb-03.jpg'
import pic2 from '../assets/photo-gallery-thumb-04.jpg'
import pic3 from '../assets/photo-gallery-thumb-05.jpg'
import pic4 from '../assets/photo-gallery-thumb-06.jpg'
import pic5 from '../assets/photo-gallery-thumb-07.jpg'
import pic6 from '../assets/photo-gallery-thumb-08.jpg'
import pic7 from '../assets/photo-gallery-thumb-09.jpg'
import pic8 from '../assets/photo-gallery-thumb-10.jpg'
import pic9 from '../assets/photo-gallery-thumb-11.jpg'
import pic10 from '../assets/photo-gallery-thumb-12.jpg'

const Contact = () => {
  return (
    <>
    <div className='bg-[#111111] text-[#6666] flex flex-col justify-center items-center py-6 md:flex-row'>
        <div className='flex flex-col justify-start items-start pl-3 py-3 w-full md:w-[30%]'>
             <h3 className='text-white text-3xl mb-8 mt-10 uppercase'>Contact Us</h3>
            <p className='flex  items-center mb-2'><span><FaLocationDot /></span>  8th floor, 379 Hudson St, New York, NY 10018</p>
            <p className='flex items-center mb-2'> <FaPhoneAlt /> (+1) 96 716 6879</p>
            <p className='flex items-center mb-2'> <IoMdMail /> contact@site.com</p>
            <h3 className='text-white text-4xl mt-4  mb-5'>Opening Times</h3>
            <p>09:30 AM – 11:00 PM</p>
            <p>Every Day</p>
        </div>
        <div className='flex flex-col justify-center items-start px-2 py-3 w-full md:w-[30%]'>
            <h3 className='text-white text-3xl mb-5 mt-10 uppercase'>Latest twitter</h3>
            <p ><a href="#"><span className='text-[#ec1a25]'>@colorlib</span></a> </p>
            <p >Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
            <p className='text-[#ec1a25] mb-2'><a href="#">https://buff.ly/2zaSfAQ</a></p>
            <p className='mb-7'>21 Dec 2017</p>
            <p className='text-[#ec1a25]' ><a href="#">@colorlib</a> </p>
            <p>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
            <p className='text-[#ec1a25]'><a href="#">https://buff.ly/2zaSfAQ</a></p>
            <p>21 Dec 2017</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
             <h3 className='text-white text-3xl mb-5 mt-10 uppercase'>Gallery</h3>
          </div>
          <div className='flex gap-3'>
            <div className='w-18.5'>
              <img className='w-full' src={pic1} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic2} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic3} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic4} alt="" />
            </div>
          </div>

           <div className='flex gap-3'>
            <div className='w-18.5'>
              <img className='w-full' src={pic5} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic1} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic6} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic7} alt="" />
            </div>
          </div>

           <div className='flex gap-3'>
            <div className='w-18.5'>
              <img className='w-full' src={pic8} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic9} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic10} alt="" />
            </div>
              <div className='w-18.5'>
              <img className='w-full' src={pic1} alt="" />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contact
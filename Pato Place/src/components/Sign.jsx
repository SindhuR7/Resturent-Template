import React from 'react'
import { IoMdMail } from "react-icons/io";


const Sign = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center py-20 gap-3 bg-[#2125292f] md:flex-row'>
        <div className='text-[#333333] text-3xl px-4'>Special Sign Up</div>
        <div className='flex border-2 border-black justify-between items-center px-4 py-2 rounded-2xl text-[#666666] bg-white'><input className='border-none' type="email" placeholder='Email Address' /><IoMdMail /></div>
        <div className=''>
            <button className='bg-[#111111] px-8 py-3 text-white text-sm rounded-2xl ml-3'>Sign-Up</button>
        </div>
    </div>
    </>
  )
}

export default Sign
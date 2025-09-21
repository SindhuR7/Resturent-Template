import React from 'react'
import backgroundImage from '../assets/master-slides-02.jpg'
const Heo = () => {
  return (
    <>
    <section className='h-lvh absolute bg-[url("../assets/master-slides-02.jpg")] '>
        <div className="title">Welcome to</div>
        <div className="heading">Pato Place</div>
        <div className="btn">
            <button>Look Menu</button>
        </div>
        <div className="points">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <div className="arrow"><i class="fa-solid fa-arrow-left"></i></div>
    </section>
    </>
  )
}

export default Heo
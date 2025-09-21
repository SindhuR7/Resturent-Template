import React from 'react'
import '../components/Heo.css'

const Heo = () => {
  return (
    <>
    <section className='hero'>
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
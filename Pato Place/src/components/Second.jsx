import React from 'react'
import '../components/Second.css'
import image from '../assets/our-story-01.jpg.webp'

const Second = () => {
  return (
    <>
    <section className='ourStory'>
        <div className="leftDiv">
            <div className="main title">Italian Resturant</div>
            <div className="wel heading">WELCOME</div>
            <div className="des">Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</div>
            <div className="go">Our Story <i class="fa-solid fa-arrow-right"></i></div>
        </div>
        <div className="rightDiv">
            <img src={image} alt="Story" />
        </div>
    </section>
    </>
  )
}

export default Second
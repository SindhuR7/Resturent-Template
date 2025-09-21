import React from 'react'
import '../components/Rest.css'
import pic1 from '../assets/intro-01.jpg.webp'
import pic2 from '../assets/intro-02.jpg.webp'
import pic3 from '../assets/intro-04.jpg.webp'

const Rest = () => {
  return (
    <>
    <div className="first">
        <div className="one">
            <div className="pic">
                <img src={pic1} alt="" />
            </div>
            <div className="descr">
                <h4>Romantic Resturant</h4>
                <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                <div className="go learn">Learn more <i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
        <div className="one"> <div className="pic">
                <img src={pic2} alt="" />
            </div>
            <div className="descr">
                <h4>Delicious Food</h4>
                <p>Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna</p>
                <div className="go learn">Learn more <i class="fa-solid fa-arrow-right"></i></div>
            </div></div>
        <div className="one">
             <div className="pic">
                <img src={pic3} alt="" />
            </div>
            <div className="descr">
                <h4>Red Wines you Love</h4>
                <p>Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                <div className="go learn">Learn more <i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Rest
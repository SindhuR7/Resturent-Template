import React from 'react'

import pics1 from '../assets/our-menu-01.jpg.webp'
import pics2 from '../assets/our-menu-05.jpg.webp'
import pics3 from '../assets/our-menu-08.jpg.webp'
import pics4 from '../assets/our-menu-10.jpg.webp'
import pics5 from '../assets/our-menu-13.jpg.webp'
import pics6 from '../assets/our-menu-16.jpg.webp'

const Menu = () => {
  return (
    <>
    <div className="bg-[#2125292f] flex flex-col">
        <div className="title dis">Discover</div>
        <div className="heading ti our">OUR MENU</div>
        <div className="lds">
            <div className="lunch all">
                <img src={pics1} alt="" />
                <div className="logobtn">
                    <button>Lunch</button>
                </div>
            </div>
            <div className="lunch all">
                <img src={pics2} alt="" />
                <div className="logobtn">
                    <button>Dinner</button>
                </div>
            </div>
            <div className="other">
                <div className="drink all">
                    <img src={pics3} alt="" />
                    <div className="logobtn">
                    <button>Drinks</button>
                </div>
                </div>
                <div className="drink all">
                    <img src={pics4} alt="" />
                    <div className="logobtn">
                    <button>Starters</button>
                </div>
                </div>
            </div>
        </div>
        <div className="happ">
            <div className="tour all">
                <img src={pics5} alt="" />
                <div className="logobtn">
                    <button>Happy tour</button>
                </div>
            </div>
            <div className="drink all">
                <img src={pics6} alt="" />
                <div className="logobtn">
                    <button>deserts</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Menu
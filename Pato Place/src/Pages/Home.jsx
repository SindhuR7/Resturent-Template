import React from 'react'
import Navbar from '../components/Navbar'
import Heo from '../components/Heo'
import Second from '../components/Second'
import Third from '../components/Third'
import Rest from '../components/Rest'
import Menu from '../components/Menu'
import Event from '../components/Event'
import Reservation from '../components/Reservation'
import Review from '../components/Review'
import Discover from '../components/Discover'
import News from '../components/News'
import Sign from '../components/Sign'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Heo/>
    <Second/>
    <Third/>
    <Rest/>
    <Menu/> 
    <Event/>
    <Reservation/>
    <Review/>
    <Discover/>
    <News/>
    <Sign/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
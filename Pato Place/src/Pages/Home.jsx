import React from 'react'
import Navbar from '../components/Navbar'
import Heo from '../components/Heo'
import Second from '../components/Second'
import Third from '../components/Third'
import Rest from '../components/Rest'
import Menu from '../components/Menu'
import Event from '../components/Event'
import Reservation from '../components/Reservation'

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
    </>
  )
}

export default Home
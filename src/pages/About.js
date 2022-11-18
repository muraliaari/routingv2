import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <Header/>
        <div style={{backgroundColor:"pink",height:"200px",width:"800px",textAlign:"center"}}>
            About Us section

        </div>
        <Outlet/>
    </div>
  )
}

export default About
import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const About = () => {
  return (
    <div>
        <Sidebar/>
        <div style={{backgroundColor:"pink",height:"200px",width:"800px",textAlign:"center",marginLeft:"200px"} }>
          <h1>About Us</h1>
            <p>Get up to ₹6000 instant savings on orders over ₹41900. Plus No Cost EMI. Terms apply. iPhone, iPad, Mac, Apple Watch, AirPods and more. Buy Direct from Apple. Services: Apple Trade In, Shop with Specialists, Free delivery, No Cost EMI available.</p>

        </div>
        <Outlet/>
    </div>
  )
}

export default About
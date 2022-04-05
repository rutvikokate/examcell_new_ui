import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import HomeComponent from '../../components/HomeComponent'

const Home = () => {
  
    return (
        <div >
            <Navbar/>
            <Sidebar />
            <HomeComponent/>
   
        </div>
    )
}

export default Home
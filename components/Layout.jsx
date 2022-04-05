import React, { useEffect, useRef } from 'react'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

const Layout = ({children}) => {


  return (
    <div className='mx-auto font-opensans'>
      
        {children}
    </div>
  )
}

export default Layout
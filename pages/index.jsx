import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dp from '../assets/fcritlogo.png'
import Navbar from '../components/Navbar'
import renderThemetoggle from '../components/Navbar'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { useState } from 'react'

export default function Login() {

  const inputStyle = "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-4 "

  const buttonStyle = "px-6 py-2 w-full bg-green-600 rounded-md my-2 text-white"

  const [show, setShow] = useState(true)
  const toggleShow = () => {
    setShow(!show)
  }
 
  return (
    <div className='flex p-10 items-center justify-center md:p-20'>

      <div className="loginBox  lg:w-1/3 md:w-2/3 w-full  rounded-md">
        <div className='flex justify-center items-center mb-4'>
          <Image src={dp} width={28} height={28} />
          <h1 className="text-2xl text-center ml-2 font-titillium">Examcell</h1>
        </div>
        <h1 className="text-4xl text-center font-bold mb-4 font-titillium">Student Login</h1>
        <div className="block p-5">
          <form action='/home'>
            <div className="form-group mb-2">
              <input type="text" className={inputStyle} placeholder="Username" />
              <input type={show?"text":"password"} className={inputStyle} placeholder="Password" />
              <label class="form-check-label text-sm" onClick={toggleShow}>{show?<span className='flex inline-flex align-center'><BiHide className='mr-1' fontSize={20}/>Hide Password</span>:<span className='flex inline-flex align-center'><BiShow className='mr-1' fontSize={20}/>Show password</span>}</label><br />
              <button type="submit" className={buttonStyle} on>Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

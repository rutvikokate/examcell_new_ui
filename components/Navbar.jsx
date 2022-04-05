import React from 'react'
import fcritlogo from '../assets/fcritlogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router';
import $ from "jquery"
import { useEffect } from 'react'
import Notice from './Notice'
import { useState } from 'react'
import { RiSunFill } from 'react-icons/ri'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import { AiOutlineForm } from 'react-icons/ai'
import { AiOutlineIdcard } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { RiMoonFill } from 'react-icons/ri'

const Navbar = () => {
    const [nav, setNav] = useState('home')
    const [mounted, setMounted] = useState(false)
    const { theme, systemTheme, setTheme } = useTheme();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        /*  var prevScrollpos = window.pageYOffset;
         window.onscroll = function () {
             var currentScrollPos = window.pageYOffset;
             console.log(currentScrollPos)
              if (prevScrollpos > currentScrollPos) {
                $('nav').addClass('shownavbar')
                $('nav').removeClass('hidenavbar')
              } else {
                $('nav').removeClass('shownavbar')
                $('nav').addClass('hidenavbar')
              
                
              }
             prevScrollpos = currentScrollPos;
         } */
    }, [])



    const renderThemeToggle = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (!mounted) return null;

        if (currentTheme == 'dark') {
            return (
                <RiSunFill className='cursor-pointer fill-white' fontSize={24} onClick={() => setTheme('light')} />
            )
        }
        else {
            return (
                <RiMoonFill className='cursor-pointer fill-black' fontSize={24} onClick={() => setTheme('dark')} />
            )
        }
    }

    const bottomNav = "z-99 bg-white fixed bottom-0 left-0 w-full drop-shadow-[0px_-5px_20px_rgba(0,0,0,0.09)] md:hidden list-none bg-lgray flex flex-row justify-between md:justify-center items-center animate-slide-in dark:bg-dbg overflow-x-scroll snap-mandatory snap-x p-2 "

    const listStyle = "p-2 mx-1 text-center text-sm active:bg-primary-100/[0.2] flex  flex-col dark:active:text-primary rounded-lg hover:text-green-700 hover:font-bold hover:bg-green-700/[0.2] text-gray-600 dark:text-gray-300 duration-200  items-center focus:outline:none snap-center"

    const topNav = `flex hover:text-primary active:border-primary border-b-[2px] dark:hover:border-primary dark:border-dbg border-white p-3 transition inline-flex items-center justfiy-start rounded-sm transition`


    return (
        <div className='sticky top-0 z-50'>
            <header className='w-full bg-lgrey dark:bg-dbg '>
                <nav className="flex wrapper justify-between w-full mx-auto p-3 items-center">
                    <div className="left flex justify-start items-center transition ease-in-out duration-100 ">
                        <Image src={fcritlogo} width={50} height={50} />
                        <h1 className="ml-2 text-xl  font-bold font-titillium "><Link href="/home">FCRIT Vashi</Link><br /><span className='relative -top-2 text-xs bg-primary text-white px-4 rounded-sm'>EXAMCELL</span></h1>
                    </div>

                    <div className="right flex hidden md:block space-x-5 text-gray-500">
                        <Link href="/home" onClick={() => setNav('home')}>
                            <a className={router.pathname == '/home' ? `active ${topNav}` : `${topNav}`}>
                                <AiOutlineHome className='mr-1' fontSize={20} />Home</a></Link>
                        <Link href="/hallticket" onClick={() => setNav('hallticket')}>
                            <a className={router.pathname == '/hallticket' ? `active ${topNav}` : `${topNav}`}>
                                <AiOutlineIdcard className='mr-1' fontSize={20} />Hallticket</a></Link>
                        <Link href="/form" onClick={() => setNav('form')}>
                            <a className={router.pathname == '/form' ? `active ${topNav}` : `${topNav}`}>
                                <AiOutlineForm className='mr-1' fontSize={20} />Exam Form</a></Link>
                        <Link href="/">
                            <a className={topNav}>
                                <AiOutlineLogout className='mr-1' fontSize={20} />Logout</a></Link>
                    </div>
                    {renderThemeToggle()}
                </nav>

                {/* <Notice type="mobile"/> */}

            </header>
            <div className={bottomNav}>
                <Link href="/home">
                    <button className={listStyle}>
                        <AiOutlineHome className='mr-1' fontSize={20} />Home</button></Link>
                <Link href="/hallticket">
                    <button className={listStyle}>
                        <AiOutlineIdcard fontSize={20} className='mr-1' />Hallticket</button></Link>
                <Link href="/form">
                    <button className={listStyle}>
                        <AiOutlineForm className='mr-1' fontSize={20} />Exam Form</button>
                </Link>
                <Link href="/logout">
                    <button className={listStyle}>
                        <AiOutlineLogout className='mr-1' fontSize={20} />Logout</button>
                </Link>
            </div>


        </div>
    )
}

export default Navbar

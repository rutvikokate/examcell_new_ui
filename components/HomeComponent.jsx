import React, { useEffect, useState } from 'react'
import { MdVerified } from 'react-icons/md'
import { MdError } from 'react-icons/md'
import Notice from './Notice'
import Marquee from 'react-fast-marquee'

import { CgProfile } from 'react-icons/cg'
import Footer from './Footer'
import Button from './Button'
import dp from '../assets/dp.jpg'
import Image from 'next/image'
import { BiNotepad } from 'react-icons/bi'
import $ from 'jquery'
import { MdExpandMore } from 'react-icons/md'
import { MdExpandLess } from 'react-icons/md'
import { boxControl } from '../styles/styles'
import { inputStyle } from '../styles/styles'

const HomeComponent = () => {

    const [expand,setExpand]=useState(true)
    const boxControl = "border dark:border-neutral-800 px-6 py-3 rounded-md m-2 basis-1/3 flex items-start flex-col justify-between text-gray-700 dark:text-neutral-300 dark:bg-lblack"
    const selectStyle = 'w-full rounded-sm px-2 py-1.5 border dark:border-none dark:bg-mblack border-gray-300 my-1'
    const radioStyle = "form-check-input appearance-none rounded-full h-4 w-4 border bg-white border-4 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    const inputStyle = "form-control block w-full px-3 py-1.5 text-base dark:bg-mblack dark:focus:bg-zinc-900 bg-white bg-clip-padding border border-solid border-gray-300 dark:border-zinc-900 rounded transition ease-in-out m-0 focus:bg-white focus:border-primary dark:focus:border-primary focus:outline-none mb-2"

    const toggleModal = () => {
        console.log(document.getElementById('myModal').style.display)
        if (document.getElementById('myModal').style.display == 'block') {
            $("#myModal").css("display", "none")
            setExpand(true)
        }
        else {
            $("#myModal").css("display", "block")
            setExpand(false)
        }
    }

    
    return (
        <section id="homeWrapper" className='w-full md:w-9/12 ml-auto px-4 bg-white dark:bg-dbg flex  flex-col' >
            <div id="myProfile" >
                <div className='flex justify-between items-center mt-2'>
                    <h1 className='font-titillium uppercase font-bold text-3xl text-gray-900 dark:text-gray-300 flex items-center p-2 '> MY PROFILE</h1>
                    {expand?(<MdExpandMore fontSize={24} onClick={toggleModal} className='md:hidden'/>):<MdExpandLess className='md:hidden' fontSize={24} onClick={toggleModal}/>}
                </div>
                <div id="myModal" style={{ display: 'none' }} className='bg-white dark:bg-dbg w-full'>
                    <div className="modal-content p-2">
                        <div id="profileSection" className="flex flex-row md:flex-col border dark:border-neutral-800 dark:bg-lblack rounded-md items-center block py-2 ">
                            <div className='basis-2/3 flex flex-col items-center'>
                                <media className="items-center">
                                    <Image src={dp} width={100} height={100} className="rounded-full" />
                                </media>
                                <p className='text-center my-1 font-titillium font-bold'>Rutvik Kokate</p>
                            </div>
                            <div id="branchDetails" className='px-5 w-full basis-1/3'>
                                <div className='my-2 w-full dark:text-green-100 text-primary-900 p-5 rounded-lg'>
                                    <div className='flex flex-col justify-between'>
                                        <h1><span className='text-sm'>Branch</span><span className='font-bold ml-3'>Computer</span></h1>
                                        <h1 ><span className='text-sm'>Semester</span><span className='font-bold ml-3'>3</span></h1>
                                    </div>

                                    <h1><span className='text-sm '>Roll no</span> <span className='font-bold ml-3'>101727</span></h1>

                                </div>
                            </div>

                            <div id="notice" className='overflow-y-scroll h-64 my-1 px-5 py-2 text-red-900 hidden md:block dark:text-red-100 rounded-lg w-full'>
                                <div className='text-lg font-bold flex items-center'><BiNotepad /> <span className='ml-1'>Notice</span></div>
                                <div id="noticeItem" className='mt-2'>
                                    <Notice />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="flex flex-col my-2 lg:flex-row">

                    <div className={boxControl}>
                        <div>
                            <h1 className='font-bold text-sm text-primary'>BIO</h1>
                            <div className="form-group my-2">
                                {/* <label className="inline-block ">Full Name</label> */}
                                <input className={inputStyle} placeholder="Full Name" />
                                {/* <label class="inline-block ">Email address</label> */}
                                <input className={inputStyle} placeholder="Email address" />
                                <small className="text-xs block">This email whill be used for sending password reset links</small>
                            </div>
                        </div>
                        <Button name="Update Bio" color="primary" />
                    </div>

                    <div className={boxControl} id="error">
                        <div>
                            <h1 className='font-bold text-sm text-primary'>PASSWORD</h1>
                            <p className='my-2'>Please change your default password before filling the form for first time.<br />  Update / Reset by following the below link</p>
                            <small className="text-xs block text-red-500 ">Password has not been changed.</small>
                        </div>
                        <Button name="Change Password" color="primary" />
                    </div>

                    <div className={boxControl}>
                        <div>
                            <h1 className='font-bold text-sm text-primary'>PHOTO</h1>
                            <p className='my-2'>Upload a proper passport size photograph of yourself. Photo file should be named as- Rollnumber.jpg.( e.g: 101727.jpg)</p>
                        </div>
                        <input class="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                        <Button name="Update Photo" color="primary" />
                    </div>
                </section>
            </div>

            <div id="examDetails" className='mt-4 p-2'>
                <h1 className='font-titillium uppercase font-bold text-gray-900 dark:text-gray-300 text-3xl mx-2'>EXAM DETAILS</h1>
                <section id="examWrapper" className="flex flex-col md:flex-row my-2">

                    <div id="regularExam" className='border dark:border-none dark:text-lgreen dark:bg-green-900/[0.2] basis-1/2 rounded-lg m-2 p-4 text-green-700'>
                        <h1 className='text-2xl font-bold font-titillium mb-2'>Regular Exam</h1>
                        <div id="semDetails" className='flex justify-between items-center'>
                            <div className='basis-2/3'>
                                <h1 className="text-3xl mb-2 ">Semester 3</h1>
                                <p>Exam form is filled and submitted succesfully.</p>
                                <p>Seat Number : <b>-</b></p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <MdVerified fontSize={48} fill="green" />
                                <label>Verified</label>
                            </div>

                        </div>
                    </div>

                    <div id="regularExam" className='border dark:border-none  dark:bg-red-900/[0.2] text-red-900 dark:text-red-100 basis-1/2 rounded-lg m-2 p-4'>
                        <h1 className='text-2xl font-bold font-titillium mb-2'>KT Exam</h1>
                        <div id="semDetails" className='flex justify-between items-center'>
                            <div className='basis-2/3'>
                                <h1 className="text-3xl mb-2 ">Semester 3</h1>
                                <p>Exam form is filled and submitted succesfully.</p>
                                <p>Seat Number : <b>405501</b></p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <MdError fontSize={48} fill="rgb(127 29 29)" />
                                <label>Not Verified</label>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </section>
    )
}

export default HomeComponent
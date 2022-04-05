import React from 'react'
import { MdVerified } from 'react-icons/md'
import { MdError } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import Footer from './Footer'
import Button from './Button'
import { boxControl } from '../styles/styles'
import { inputStyle } from '../styles/styles'

const HomeComponent = () => {

    const boxControl = "bg-white dark:bg-lblack px-6 py-3 rounded-md m-2 basis-1/3 flex items-start flex-col justify-between text-gray-700 dark:text-neutral-300 dark:border-none border"

    const selectStyle = 'w-full rounded-sm px-2 py-1.5 border dark:border-none dark:bg-mblack border-gray-300 my-1'
    const radioStyle = "form-check-input appearance-none rounded-full h-4 w-4 border bg-white border-4 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"

    const inputStyle = "form-control block w-full px-3 py-1.5 text-base dark:bg-mblack dark:focus:bg-zinc-900 bg-white bg-clip-padding border border-solid border-gray-300 dark:border-zinc-900 rounded transition ease-in-out m-0 focus:bg-white focus:border-primary dark:focus:border-primary focus:outline-none mb-2"
    return (
        <section id="homeWrapper" className='w-full md:w-9/12 ml-auto px-4 rounded-xl bg-white dark:bg-dbg flex  flex-col' >
            <div id="myProfile" >
                <h1 className='font-titillium uppercase font-bold text-3xl text-gray-900 dark:text-gray-300 flex items-center pt-4 mx-2'> MY PROFILE</h1>
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
                                <p>Seat Number : <b>405501</b></p>
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
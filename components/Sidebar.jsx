import React from 'react'
import dp from '../assets/dp.jpg'
import Image from 'next/image'
import { BiNotepad } from 'react-icons/bi'
import $ from 'jquery'
import { MdExpandMore } from 'react-icons/md'
import { MdExpandLess } from 'react-icons/md'
import Notice from './Notice'
import Marquee from 'react-fast-marquee'



const Sidebar = () => {
    return (
        <aside class="w-full md:w-3/12 md:block md:top-20 bottom-0 left-0 relative md:fixed inset-0 rounded-sm bg-white dark:bg-dbg">
            <div id="profileSection" className="flex  flex-row md:flex-col items-center hidden md:block ">
                <div className='basis-2/3 flex flex-col items-center'>
                    <media className="items-center">
                        <Image src={dp} width={100} height={100} className="rounded-full" />
                    </media>
                    <p className='text-center my-1 font-titillium font-bold'>Rutvik Kokate</p>
                </div>
                <div id="branchDetails" className='px-5 w-full '>
                    <div className='dark:bg-lblack border dark:border-neutral-900  my-2 w-full dark:text-green-100 text-primary-900 p-5 rounded-lg'>
                        <div className='flex md:flex-row justify-between '>
                            <h1><span className='text-sm'>Branch<br /></span> <span className='font-bold'>Computer</span></h1>
                            <h1><span className='text-sm'>Semester<br /></span> <span className='font-bold'>3</span></h1>
                        </div>

                        <h1><span className='text-sm '>Roll no<br /></span> <span className='font-bold'>101727</span></h1>

                    </div>
                </div>

                <div id="notice" className='overflow-y-scroll h-64 my-1 px-5 py-2 text-red-900 hidden md:block dark:text-red-100 rounded-lg w-full'>
                    <div className='text-lg font-bold flex items-center'><BiNotepad /> <span className='ml-1'>Notice</span></div>
                    <div id="noticeItem" className='mt-2'>
                        <Notice />
                    </div>
                </div>
            </div>

            <div className='w-full border-y md:hidden dark:border-neutral-600 justify-between items-center rounded-sm p-1'>
                <div className='flex items-center'>
                <p className='text-sm  mx-2 font-bold'>Notice</p>
                   <Marquee speed={30} gradient={false} className='list-decimal text-red-900'> 
                       <li className="mr-4 bg-red-100 dark:bg-red-900/[0.3] dark:text-red-100 rounded-md p-1">Exam form is open</li>
                       <li className="mr-4 bg-red-100 dark:bg-red-900/[0.3] dark:text-red-100 rounded-md p-1">Exam form is open</li>
                       <li className="mr-4 bg-red-100 dark:bg-red-900/[0.3] dark:text-red-100 rounded-md p-1">Exam form is open</li>
                   </Marquee>
                </div>
               
            </div>



           
        </aside>
    )
}

export default Sidebar
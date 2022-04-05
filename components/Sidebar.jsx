import React from 'react'
import dp from '../assets/rutvik.jpg'
import Image from 'next/image'
import { BiNotepad } from 'react-icons/bi'
import Notice from './Notice'

const Sidebar = () => {
    return (
        <aside class="p-4 w-full md:w-3/12 md:block md:top-20 bottom-0 left-0 relative md:fixed inset-0 rounded-sm bg-white dark:bg-dbg">
            <div id="profileSection" className="flex flex-row md:flex-col items-center">
               <div className='basis-2/3 flex flex-col items-center'>
               <media className="items-center">
                    <Image src={dp} width={100} height={100} className="rounded-full" />
                </media>
                <p className='text-center my-1 font-titillium font-bold'>Rutvik Kokate</p>
               </div>
                <div id="branchDetails" className='px-5 w-full'>
                    <div className='dark:bg-lblack  my-2  w-full dark:text-green-100 text-primary-900 p-5 rounded-lg'>
                        <div className='flex md:flex-row justify-between '>
                            <h1><span className='text-sm'>Branch<br /></span> <span className='font-bold'>Computer</span></h1>
                            <h1><span className='text-sm'>Semester<br /></span> <span className='font-bold'>3</span></h1>
                        </div>
                
                        <h1><span className='text-sm '>Roll no<br/></span> <span className='font-bold'>101727</span></h1>
                      
                    </div>
                </div>

                <div id="notice" className='overflow-y-scroll h-64 my-1 px-5 py-2 text-red-900 hidden md:block dark:text-red-100 rounded-lg w-full'>
                    <div className='text-lg font-bold flex items-center'><BiNotepad /> <span className='ml-1'>Notice</span></div>
                    <div id="noticeItem" className='mt-2'>
                        <Notice />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
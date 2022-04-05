import React from 'react'

const SchemeSemester = (props) => {
    const {type}=props

    const boxControl = "basis-1/2 drop-shadow-2xl bg-white dark:bg-lblack px-6 py-3 rounded-md m-2 flex items-start flex-col justify-between text-gray-700 dark:text-neutral-300"
    const radioStyle = "form-check-input appearance-none rounded-full h-4 w-4 border bg-white border-4 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
    const selectStyle = 'w-full rounded-sm px-2 py-1.5 border dark:border-none dark:bg-mblack border-gray-300 my-1'
    return (
        <div id="boxRow" className='flex flex-col md:flex-row'>
            <div className={boxControl}>
                <h1 className='font-bold text-sm my-2 text-primary'>REVISION SCHEME</h1>
                <div class="form-check">
                    <input className={radioStyle} type="radio" name="revScheme" />
                    <label class="form-check-label inline-block" for="flexRadioDefault1">
                        Revision Scheme 2012
                    </label>
                </div>
                <div class="form-check">
                    <input className={radioStyle} type="radio" name="revScheme" />
                    <label class="form-check-label inline-block" for="flexRadioDefault2">
                        Revision Scheme 2016
                    </label>
                </div>
                <div class="form-check">
                    <input className={radioStyle} type="radio" name="revScheme" />
                    <label class="form-check-label inline-block" for="flexRadioDefault2">
                        Revision Scheme 2019
                    </label>
                </div>
            </div>

            {type=='KT'?(
                <div className={boxControl}>
                <h1 className='font-bold text-sm text-primary text-primary'>KT SEMESTER DETAILS</h1>
                <div className='flex flex-col my-2 w-full'>
                    <select className={selectStyle}>
                        <option>Computer</option>
                        <option>Mechanical</option>
                        <option>IT</option>
                    </select>
                    <select className={selectStyle}>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            ):(
                <div className={boxControl}>
                <h1 className='font-bold text-sm text-primary text-primary'>CURRENT SEMESTER DETAILS</h1>
                <div className='flex flex-col my-2 w-full'>
                    <select className={selectStyle}>
                        <option>Computer</option>
                        <option>Mechanical</option>
                        <option>IT</option>
                    </select>
                    <select className={selectStyle}>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            )}

        </div>
    )
}

export default SchemeSemester
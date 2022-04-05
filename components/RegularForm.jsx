import React from 'react'
import coursestate from '../pages/api/courseState'
import Button from './Button'
import FloatingInput from './FloatingInput'
import SchemeSemester from './FormComponents/SchemeSemester'
import RadioButton from './RadioButton'
import { boxControl } from '../styles/styles'
import { selectStyle } from '../styles/styles'

const RegularForm = (props) => {
    console.log(props)

    return (
        <div className='flex p-2 bg-white dark:bg-dbg dark:text-gray-200 rounded-sm mt-4 mb-24 mx-1'>
            <div id="formWrapper" className='w-full flex flex-col'>
                <SchemeSemester type={props.type} />
                <div className={boxControl}>
                    <h1 className='font-bold text-sm text-primary'>SELECTED SUBJECTS</h1>
                    <table className='my-2 w-full'>
                        <tbody>
                            <tr>
                                <td><b>CODE</b></td>
                                <td><b>COURSE</b></td>
                                <td><b>DATE</b></td>
                            </tr>
                            {coursestate.map((item) => {
                                return (
                                    <tr><td>{item.code}</td><td>{item.course}</td><td>{item.date}</td></tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col md:flex-row">
                    <div className={`${boxControl} basis-1/2`}>
                        <h1 className='font-bold text-sm text-primary'>PERSONAL DETAILS</h1>
                        <div id="fieldWrapper" className='mt-4  flex flex-col w-full'>

                            <div className="field ">
                                <label><b>Year of Exam</b></label>
                                <select name="" className={selectStyle}>
                                    <option>2021</option>
                                    <option>2022</option>
                                </select>
                            </div>

                            <RadioButton first="SH" second="SH" label="Session" help="FH exams are conducted in May-June. SH exams are conducted in Nov-Dec" />

                            <div className="field">
                                <div class="flex items-center">
                                    <div class="datepicker relative form-floating mb-3 w-full">
                                        <label for="floatingInput" ><b>Date of Birth</b></label>
                                        <input type="date"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal dark:bg-mblack dark:border-none bg-white bg-clip-padding border border-solid border-gray-300 rounded-sm transition ease-in-out m-0 focus:bg-primary focus:outline-none"
                                            placeholder="Select a date" />
                                    </div>
                                </div>
                            </div>

                            <FloatingInput type="number" placeholder="Roll number" name="rollNo" />

                            <FloatingInput type="text" placeholder="Student's name" name="studentName" />

                            <FloatingInput type="email" placeholder="Student's Email" name="studentEmail" />

                            <FloatingInput type="text" placeholder="Student's Phone number" name="studentPh" />

                            <FloatingInput type="text" placeholder="Father's name" name="fatherName" />

                            <FloatingInput type="text" placeholder="Mother's name" name="motherName" />

                            <FloatingInput type="text" placeholder="Student's phone number" name="StudentPhoneNo" />

                            <FloatingInput type="text" placeholder="Parent's phone number" name="ParentPhoneNo" />

                            <RadioButton first="Male" second="Female" label="Gender" />

                            <div className='field'>
                                <label htmlFor=""><b>Address</b></label>
                                <textarea placeholder='Address' className='w-full h-32 border rounded-sm focus:outline-primary border-gray-300 px-3 dark:bg-mblack  dark:border-none py-1.5 '></textarea>
                            </div>

                            <Button name="Submit Form" color="primary" />
                        </div>
                    </div>

                    <div className='basis-1/2 py-4 px-2'>
                        <h1 className="text-2xl text-center font-bold">Instructions</h1><br />
                        <ul>
                            <li>1. Candidate must preserve and produce this hall ticket along with the college identity card, during examination, without which entry to the exam hall will be restricted</li><br />
                            <li>2. Candidate should be present in the exam hall 15 minutes before the commencement of examination</li><br />
                           

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegularForm
import React from 'react'
import SchemeSemester from './FormComponents/SchemeSemester'
import coursestate from '../pages/api/courseState'
import Button from './Button'

import PersonalField from './FormComponents/PersonalField'

const KtForm = (props) => {
  const boxControl = "bg-white dark:bg-lblack px-6 py-3 rounded-md m-2 basis-1/2 flex items-start flex-col justify-between text-gray-700 dark:text-neutral-300 drop-shadow-2xl"

  const selectStyle = 'w-full rounded-sm px-2 py-1.5 border dark:border-none dark:bg-mblack border-gray-300 my-1'

  return (
    <div className='flex p-2  dark:bg-dbg dark:text-gray-200 rounded-sm mt-4 mb-24 mx-1'>
      <div id="formWrapper" className='w-full  flex flex-col'>
        <SchemeSemester type={props.type} />
        <div className='flex flex-col md:flex-row my-4'>
          <div className={`${boxControl} md:w-1/2`}>
            <h1 className='font-bold text-sm text-primary mb-2'>SELECT YOUR KT SUBJECTS</h1>
            <div className='flex w-full flex-col'>
              <div className="field">
                <label><b>Semester</b></label>
                <select name="" className={selectStyle}>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <h1 className="text-lg">Showing subjects of Computer , Semester 3</h1>

              <table className='w-full '>
                {coursestate.map((item) => (
                  <tr className="thbold w-full">
                    <td><b>{item.code}</b></td>
                    <td><b>{item.course}</b></td>
                    <td><input type="checkbox" /></td>

                  </tr>
                ))}
              </table>

            </div>
            <Button name="Add"  />
          </div>

          <div className={boxControl}>
            <h1 className='font-bold text-sm text-primary'>SELECTED KT SUBJECTS</h1>
            <div className="flex w-full flex-col">
              <table className='w-full'>
                {coursestate.map((item) => (
                  <tr className="thbold w-full">
                    <td><b>{item.code}</b></td>
                    <td><b>{item.course}</b></td>
                    <td><input type="checkbox" /></td>

                  </tr>
                ))}
              </table>
            </div>
            <Button name="Remove" color="danger" />
          </div>
        </div>

        <div className={`${boxControl}`}>
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

        <PersonalField />
      </div>
    </div>
  )
}

export default KtForm
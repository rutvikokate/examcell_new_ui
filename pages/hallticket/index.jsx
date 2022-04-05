import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Button from '../../components/Button'
import Image from 'next/image'
import fcrit from '../../assets/fcritlogo.png';
import sign from '../../assets/sign.png';
import rutvik from '../../assets/rutvik.jpg';
import uni from '../../assets/uni.png';

const index = () => {
  const coursestate = [{
    'id': 1,
    'code': 'CSC301',
    'course': 'DLDA',
    'start_time': '11:00',
    'end_time': '13:00',
    'date': '23-02-2021'
  }, {
    'id': 2,
    'code': 'CSC302',
    'course': 'AM3',
    'start_time': '11:00',
    'end_time': '13:00',
    'date': '23-02-2021'
  },
  {
    'id': 3,
    'code': 'CSC303',
    'course': 'Machine Learning',
    'start_time': '11:00',
    'end_time': '13:00',
    'date': '23-02-2021'
  },
  {

    'id': 4,
    'code': 'CSC304',
    'course': 'DIS',
    'start_time': '11:00',
    'end_time': '13:00',
    'date': '23-02-2021'

  }]
  const btnStyle = "my-2 py-2 px-4 dark:bg-primary/[0.2] dark:hover:bg-primary-100/[0.5] dark:active:bg-primary-900 dark:text-white rounded-sm  text-white bg-primary active:bg-primary-900 hover:bg-primary-100 shadow-sm hover:text-white transition"
  return (
    <div >
      <Navbar/>
      <Sidebar />
      <section id="homeWrapper" className='flex w-full md:w-9/12 ml-auto rounded-md flex-col mb-24 text-sm' >
        <div className='basis-full px-2'>
          <h1 className='font-titillium uppercase font-bold text-3xl flex items-center m-4'>Hallticket</h1>
          <div className='p-4 rounded-md'>
          <h1 className='text-xs '>Scroll down to Download hallticket.</h1>
            <table className='w-full text-black' >
              <tbody className='w-full bg-white'>
                <tr>
                  <th className="px-2">
                    <Image src={fcrit} width={80} height={80} />
                  </th>
                  <th colSpan={2} className="px-2 text-center text-gray-800">
                    <p><b>University of Mumbai</b></p>
                    <p>
                      <b >FR. C. RODRIGUES INSTITUTE OF TECHNOLOGY,VASHI (College Code:426)</b>
                    </p>
                    <p><b>HALL TICKET</b></p>
                  </th>
                  <th class="px-2 text-center w-[20%]">
                    <Image src={uni} width={80} height={80} />
                  </th>
                </tr>

                <tr className="">
                  <td className="w-[20%]"><p>Student Name</p></td>
                  <td colspan="2"><p>John Doe</p></td>
                  <td rowspan="5" style={{ textAlign: "center", alignContent: 'center' }}>
                    {/* <img src={this.state.photo ? this.state.photo[2].download_url : 'Loading...'}></img> */}
                    <Image src={rutvik} alt="" width={120} height={140} />
                  </td>
                </tr>

                <tr class="sd">
                  <td><p>Examination</p></td>
                  <td colspan="2"><p>Third year</p></td>
                </tr>
                <tr class="sd">
                  <td><p>Held in</p></td>
                  <td colspan="2"><p>2021 December</p></td>
                </tr>
                <tr class="sd">
                  <td><p>Seat no</p></td>
                  <td colspan="2"><p>50763</p></td>
                </tr>
                <tr class="sd">
                  <td><p>Branch</p></td>
                  <td colspan="2"><p>Computer</p></td>
                </tr>

                <tr className="thbold">
                  <td><b>CODE</b></td>
                  <td><b>COURSE TITLE</b></td>
                  <td><b>TIMINGS</b></td>
                  <td ><b>DATE</b></td>
                </tr>
                {coursestate.map((item) => (
                  <tr className="thbold">
                    <td><b>{item.code}</b></td>
                    <td><b>{item.course}</b></td>
                    <td><b>{item.start_time}-{item.end_time}</b></td>
                    <td><b>{item.date}</b></td>
                  </tr>
                ))}

                <tr class="student-signature">
                  <td colspan="2"><b className='relative top-6'>Student Signature</b></td>
                  <td><b className='relative top-6'>College Seal</b></td>
                  <td><Image src={sign} height={200} alt="sign" /><br /><b>Principal</b></td>
                </tr>
              </tbody>
            </table>
           
          </div>
        </div>
        <div className='basis-full mx-6 p-2 flex flex-col items-center' >
          <h1 className="text-2xl text-center font-bold">Instructions</h1><br/>
          <ul>
            <li>1. Candidate must preserve and produce this hall ticket along with the college identity card, during examination, without which entry to the exam hall will be restricted</li><br />
            <li>2. Candidate should be present in the exam hall 15 minutes before the commencement of examination</li><br />
            <li>3. Cell phones, watch calculators, alarm clocks, digital watches with built in calculators/memory or any electronic or smart devices with memory are not allowed in the examination hall</li><br />
            <li>4. Your Admit Card will be verified during the examination. Please ensure that this is duly signed by you and the supervisor/invigilator</li><br />
            <li>5. No students will be allowed to enter examination hall 30 minutes after the start of examination</li><br />
            <li>6. No student will be allowed to go out of the exam hall in the first 30 minutes and last 10 minutes of examination.</li><br />
            <li>7. Without stamping the college seal, the hallticket is not valid</li><br />
            <li>8. Fine will be collected incase of loss of hallticket and a duplicate hallticket will be issued</li><br />

            <span style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="subtitle" style={{ margin: '0px 5px' }}>&#128522; NO COPY, BE HAPPY &#128522;</div>
            </span>

          </ul>
          <Button name="Download Hallticket" color="primary"/>
        </div>
      </section>

    </div>
  )
}

export default index
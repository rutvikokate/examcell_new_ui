import React from 'react'

const FloatingInput = (data) => {
    const inputStyle = "form-control block w-full px-3 py-1.5 text-base dark:bg-mblack dark:focus:bg-zinc-900 bg-white bg-clip-padding border border-solid border-gray-300 dark:border-zinc-900 rounded-sm transition ease-in-out m-0 focus:bg-white focus:border-primary dark:focus:border-primary focus:outline-none mb-2"
    console.log(data)
  return (
    <div className='field'>
        <label><b>{data.placeholder}</b></label>
        <input className={inputStyle} type={data.type} placeholder={data.placeholder} name={data.name}/>
    </div>
  )
}

export default FloatingInput
import React from 'react'

const RadioButton = (data) => {
    const radio = "form-check-input appearance-none rounded-full h-4 w-4 border bg-white border-4 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
  return (
    <div className="field">
    <label><b>{data.label}</b></label>
    <div className='flex'>
        <div class="form-check mr-6">
            <input className={radio} type="radio" name={data.second} />
            <label class="form-check-label inline-block">
                {data.first}
            </label>
        </div>
        <div class="form-check">
            <input className={radio} type="radio" name={data.second} />
            <label class="form-check-label inline-block">
                {data.second}
            </label>
        </div>
    </div>
    <small className='text-xs'>{data.help}</small>
</div>
  )
}

export default RadioButton
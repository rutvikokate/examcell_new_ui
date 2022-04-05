import React from 'react'

const Button = (data) => {

  const btn=(color)=>{
    if(color=='success'){
      return('bg-green-400 active:bg-green-300 hover:bg-green-500 dark:bg-green-500/[0.3]')
    }
    else if(color=='danger'){
      return('bg-red-400 active:bg-red-300 hover:bg-red-500 dark:bg-red-900/[0.3]')
    }
    else{
      return('bg-primary active:bg-primary-900 hover:bg-primary-100')
    }
  }

    /* const btnStyle = `my-2 py-2 px-4 dark:bg-${data.color}/[0.2] dark:hover:bg-${data.color}-100/[0.5] dark:active:bg-${data.color}-900 dark:text-white rounded-sm  text-white bg-${data.color} active:bg-${data.color}-900 hover:bg-${data.color}-100 shadow-sm hover:text-white transition` */
   /*  const btnStyle=`my-2 py-2 px-4 rounded-sm text-white font-bold ${data.color=='success'?btnConfig['success'].bgColor:btnConfig['danger'].bgColor}` */
  return (
    <button type='button' className={`text-white rounded-sm my-2 py-2 px-4 ${btn(data.color)}`}>{data.name}</button>
  )
}

export default Button
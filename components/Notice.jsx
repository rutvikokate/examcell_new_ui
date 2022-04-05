import React from 'react'
import Marquee from "react-fast-marquee";


const Notice = (props) => {
    const data = [
        { "notice": "Form filling is now live lorem2asdasdasdn sakdjbs sadjbsa askdkqd asdnaskd", id: '1' }
        ,
        {
            "notice": "Form date is now over", id: '2'
        },
        {
            "notice": "TOday is last date", id: '3'
        },
        {
            "notice": "TOday is last date", id: '3'
        },
        {
            "notice": "TOday is last date", id: '3'
        }]
    console.log(props.type)
    return (
        <div>
            {props.type == 'mobile' ? (

                <Marquee speed={40} className='bg-red-400' gradient={false}>
                    {data.map((item, index) => {
                        return <li className='ml-4 list-decimal'>{item.notice}</li>
                    })}
                </Marquee>

            ) : (
                data.map((item, index) => {
                    return <p className='border rounded bg-red-100 dark:border-none dark:bg-lblack my-2 p-2' key={index}>{item.notice}</p>
                })

            )}



        </div>
    )
}

export default Notice
import React from 'react'

export default function Smallcatergory({ title, amount }) {
    return (
        <div>
            <div  className='underlinediv'>
                <div className='undflex'>
        <div> {title}</div>
        <div>{amount}</div>
        </div>
                
                <div className='underline'></div>


            </div>

        </div>
    )
}

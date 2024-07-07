import React from 'react'
import watchnow from '../assets/watchnow.svg'

function Join() {
    return (
        <div className='flex flex-col justify-center items-center mb-5'>
            <p className=' p-4 lg:p-0 text-2xl uppercase ibm lg:w-9/12 [700px] my-2 mb-6'>Whatever the case may be there is a Casio watch out there for every trader, and it will probably still be ticking when you’re long gone, a perfect piece to be passed down to your future generations.</p>
            <img src={watchnow} alt="" />
        </div>
    )
}

export default Join
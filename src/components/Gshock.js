import React from 'react'
import gshockarrow from '../assets/gshockarrow.svg'
import dualtime from '../assets/dualtime.svg'
import shockwatch from '../assets/shockwatch.svg'
import leftouterwatch from '../assets/leftouterwatch.svg'
import rightouterwatch from '../assets/rightouterwatch.svg'
import buycasio from '../assets/buycasio.svg'
import casioback from '../assets/casioback.svg'

function Gshock() {
    return (
        <div className='flex flex-col items-center justify-center relative'>
            <div className="relative flex flex-col items-center justify-cente top w-full">
                <img src={gshockarrow} alt="" className='self-start mb-40 lg:mb-auto' />
                <img src={rightouterwatch} alt="" className='absolute -right-10 lg:-right-40 top-52 lg:top-0 w-52 lg:w-auto ' />
                <img src={leftouterwatch} alt="" className='lg:hidden flex absolute -left-20 lg:-left-40 top-52 lg:top-0 w-52 lg:w-auto ' />
            </div>
            <div className="relative flex flex-col items-center justify-cente bottom w-full">
                <img src={dualtime} alt="" className='self-end' />
                <img src={leftouterwatch} alt="" className='hidden lg:flex absolute -left-32 top-0' />
            </div>
            <p className=' p-4 lg:p-0 text-2xl uppercase ibm lg:w-9/12 [700px] my-2 mb-6'>Whatever the case may be there is a Casio watch out there for every trader, and it will probably still be ticking when you’re long gone, a perfect piece to be passed down to your future generations.</p>
            <img src={buycasio} alt="" className='mb-5' />
            <img src={casioback} alt="" className='absolute -z-[1] ldg:-top-[600px] w-full top-40' />
        </div>
    )
}

export default Gshock
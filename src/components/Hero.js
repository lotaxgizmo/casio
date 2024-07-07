import React from 'react'
import herotext from '../assets/herotext.svg'
import buynowbtn from '../assets/buynowbtn.svg'
import raydiumbtn from '../assets/raydiumbtn.svg'
import telegrambtn from '../assets/telegrambtn.svg'
import tinywatch from '../assets/tinywatch.svg'
import clockleft from '../assets/clockleft.svg'
import clockright from '../assets/clockright.svg'


function Hero() {
    return (
        <div className='flex flex-col justify-center items-center w-full relative mt-10 lg:mb-96 mb-28 '>
            <div className="clocs relative w-full flex flex-row justify-center items-center lg:hidden">
                <img src={clockleft} alt="" className='w-40 lg:w-auto lg:absolute animate-spin. -left-14 -top-28 z-20' />
                <img src={clockright} alt="" className='w-40 lg:w-auto lg:absolute animate-spin. -right-14 -top-28 z-20' />
            </div>
            <img src={herotext} alt="" className='w-10/12 mt-10 z-10' />
            <div className="clocs relative w-full lg:flex flex-row justify-center items-center hidden">
                <img src={clockleft} alt="" className='w-40 lg:w-auto lg:absolute animate-spin. -left-14 -top-28 z-20' />
                <img src={clockright} alt="" className='w-40 lg:w-auto lg:absolute animate-spin. -right-14 -top-28 z-20' />
            </div>
            <h2 className='lg:text-[80px] lg:leading-snug text-3xl mt-2 lg:mt-auto z-10'>COIN</h2>




            <img src={tinywatch} alt="" className='animate-spinn my-4 lg:my-auto' />
            <div className="btns flex flex-col lg:flex-row justify-evenly   z-10">
                <img src={buynowbtn} alt="" className='m-2 lg:m-5' />
                <img src={telegrambtn} alt="" className='m-2 lg:m-5' />
                <img src={raydiumbtn} alt="" className='m-2 lg:m-5' />

            </div>





            <div className="box border-4 border-[#008DF0] rounded-[40px] w-11/12 lg:w-9/12 h-[730px] slg:h-screen lg:h-[607px] absolute top-0 ">

            </div>
        </div>
    )
}

export default Hero
import React from 'react'
import casio1 from '../assets/casio1.svg'
import casio2 from '../assets/casio2.svg'
import casio3 from '../assets/casio3.svg'
import casio4 from '../assets/casio4.svg'
import buycasio from '../assets/buycasio.svg'
import choosebackground from '../assets/choosebackground.svg'
import bigstrip from '../assets/bigstrip.svg'

function Choose() {
    return (
        <div className='relative flex flex-col justify-center items-center w-full'>
            <div className='relative flex flex-col justify-center items-center mt-10 px-4'>
                <h2 className='lg:text-[80px] lg:leading-snug text-3xl  text-right self-end'>CHOOSE  YOUR <br />CASIO</h2>


                <div className="casios flex lg:flex-row flex-col my-10 mb-14 lg:mb-20">
                    <img src={casio1} alt="" className='m-3 lg:hover:-mt-20 transition-all' />
                    <img src={casio2} alt="" className='m-3 lg:hover:-mt-20 transition-all' />
                    <img src={casio3} alt="" className='m-3 lg:hover:-mt-20 transition-all' />
                    <img src={casio4} alt="" className='m-3 lg:hover:-mt-20 transition-all' />
                </div>

                <img src={buycasio} alt="" />

                <img src={choosebackground} alt="" className='absolute -z-[1]' />
            </div>
            <img src={bigstrip} alt="" className='absolute -z-[1] lg:-top-[600px] w-full top-40' />
        </div>
    )
}

export default Choose
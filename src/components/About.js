import React from 'react'
import about from '../assets/about.svg'
import aboutback from '../assets/aboutback.svg'
import bentwatch from '../assets/bentwatch.svg'
import faceit from '../assets/faceit.svg'
import buycasio from '../assets/buycasio.svg'
import lilwatch from '../assets/lilwatch.svg'
import Sidebar from '../objects/Sidebar'

function About() {
    return (
        <div className="">
            <div className='relative bg-[#008DF0] rounded-xl lg:rounded-[69px] p-1 lg:p-3 flex justify-center items-center m-4 lg:m-24'>


                <div className='z-10 border-2 border-black rounded-xl lg:rounded-[69px] w-full p-8'>
                    <div className="two flex flex-col-reverse lg:flex-row justify-around">
                        <div className="left lg:w-2/12 ">
                            <Sidebar />
                        </div>
                        <div className=" right lg:w-10/12 flex flex-col justify-start items-end">
                            <img src={about} alt="" className='lg:w-11/12' />









                            <div className="inner flex flex-col lg:flex-row">



                                <div className=" relative left flex justify-center items-center flex-col lg:flex-col mt-5 lg:mt-auto">
                                    <img src={faceit} alt="" className='w-96' />
                                    <img src={bentwatch} alt="" className='hidden lg:flex absolute lg:w-[420px] -bottom-16 max-w-none' />
                                    <img src={bentwatch} alt="" className='hidden lg:flex lg:opacity-0 lg:w-[400px]  ' />
                                </div>
                                <div className="right flex flex-col justify-start lg:items-end">
                                    <p className='text-black lg:text-right text-xl !uppercase ibm lg:w-[700px] my-2'>Casio watches are built tough, last forever, and there are many options depending on what type of Degen you are, much like todays crypto market. </p>
                                    <img src={lilwatch} alt="" className='' />
                                    <p className='text-black lg:text-right text-xl !uppercase ibm lg:w-[700px] my-2 mb-6'>Maybe you are a Bitcoin maxi and prefer a MR G high end timepiece, or maybe you’re a Solana shitcoin slinger and you have a vast collection of crazy ass G Shock watches. </p>
                                    <img src={buycasio} alt="" className='mb-5' />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <img src={aboutback} alt="" className='absolute -z-[0] lg:-top-[600px] w-full top-40' />
            </div>
        </div>
    )
}

export default About
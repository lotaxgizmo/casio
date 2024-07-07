import React from 'react'
import buynowsquare from '../assets/buynowsquare.svg'
import casiotime from '../assets/casiotime.svg'
import rectanglethingy from '../assets/rectanglethingy.svg'
import sidebar from '../assets/sidebar.svg'

function Sidebar() {
    return (
        <div className='flex flex-col justify-center items-center'>
            {/* <img src={buynowsquare} alt="" className='m-3' />
            <img src={casiotime} alt="" className='m-3' /> */}
            <img src={sidebar} alt="" className='m-3 w-96s' />
        </div>
    )
}

export default Sidebar
import React from 'react'
import liquidity from '../assets/liquidity.svg'
import supply from '../assets/supply.svg'
import tax1 from '../assets/tax1.svg'
import tax2 from '../assets/tax2.svg'
import tax3 from '../assets/tax3.svg'
import tokenomics from '../assets/tokenomics.svg'

function Tokenomics() {
    return (
        <div className='flex flex-col justify-center items-center relative mb-32 mx-4 l'>

            <img src={tokenomics} alt="" className='w-10/12 lg:w-auto lg:mb-0 mb-5 mt-10 z-10' />

            <div className="two flex flex-col-reverse justify-center items-center lg:flex-row">
                <div className="a w-full lg:w-auto bg-[#008DF0] rounded-xl lg:rounded-[69px] p-1 lg:p-3 flex flex-col lg:flex-row">
                    <img src={tax1} alt="" className='m-2' />
                    <img src={tax2} alt="" className='m-2' />
                    <img src={tax3} alt="" className='m-2' />
                </div>

                <div className="b my-4 lg:my-0">
                    <img src={supply} alt="" className='m-2' />
                    <img src={liquidity} alt="" className='m-2' />
                </div>
            </div>

            <div className="lg:flex hidden box border-4 border-[#008DF0] rounded-[40px] w-11/12 lg:w-9/12 h-[730px] slg:h-screen lg:h-[607px] absolute top-0 "></div>
        </div>
    )
}

export default Tokenomics